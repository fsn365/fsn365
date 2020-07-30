import React, { useEffect, useState } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import { addressList } from "../api/address";
import Head from "../Public/Head";
import Footer from "../Public/Footer";
import "./index.less";

const columns = [
  {
    id: "id",
    label: "Address ",
    format: (obj) => (
      <Link href={`/Address/${obj.id}`}>
        <a>{obj.id}</a>
      </Link>
    ),
  },
  { id: "fsn", label: "FSN Balance", minWidth: 70 },
  {
    id: "fsnIn",
    label: "TL FSN",
    minWidth: 70,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "fsnOwn",
    label: "FSN Ownership",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
];
export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setrows] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await addressList();
      if (result.data.data === undefined) {
        fetchData();
        return;
      }
      setrows(result.data.data);
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <Head />
      <div className="txndiv">
        <h3>Fusion Address</h3>
        <Paper className="root">
          <p>
            <strong>Notice:</strong>We only list addresses that hold one or more
            <strong className=" jss359"> FSN ownership </strong>at this page.
          </p>
          <TableContainer className="container">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="center"
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    var obj = {
                      id: row.id,
                    };
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align="center">
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      <Footer />
    </div>
  );
}
