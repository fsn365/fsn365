import React, { useState, useEffect } from "react";
import "./index.less";
import { getBlocks } from "../api";
import Head from "../Public/Head";
import Footer from "../Public/Footer";
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

const columns = [
  {
    id: "height",
    label: "Block",
    minWidth: 170,
    align: "center",
    color: "#3498DB",
    format: (obj) => (
      <Link href={`/Blocks/${obj.height}`}>
        <a style={{ color: "#3A98DB" }}>{obj.height}</a>
      </Link>
    ),
  },
  { id: "timestamp", label: "Age", minWidth: 80, align: "center" },
  {
    id: "miner",
    label: "Miner",
    minWidth: 170,
    align: "center",
    color: "#3498DB",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "txns",
    label: "Txn",
    minWidth: 170,
    align: "center",
    color: "#3498DB",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "reward",
    label: "Reward",
    minWidth: 170,
    align: "center",
    // format: (value) => value.toFixed(2),
  },
];

const blockel = (v) => {
  // console.log(v)
};

export default function Blocks() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBlocks();
      console.log(result);
      if (result.data.data === undefined) {
        fetchData();
        return;
      }
      setArr(result.data.data);
    };
    fetchData();
  }, []);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="block">
      <Head />
      <div className="blocksdiv">
        <h3>Blocks</h3>
        <Paper className="b-root">
          <TableContainer className="b-container">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      color={column.color}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {arr
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    var obj = {
                      height: row.height,
                    };
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              onClick={blockel(value)}
                              key={column.id}
                              align={column.align}
                            >
                              {column.format ? column.format(obj) : value}
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
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            component="div"
            count={arr.length}
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
