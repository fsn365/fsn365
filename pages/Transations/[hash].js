import React, { useEffect, useState } from "react";
import axios from "axios";

import Head from "../Public/Head";
import Footer from "../Public/Footer";
import "./index.less";

const timer = (date) => {
  var d = new Date(date);
  var yue = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
  var re = d.getDate() > 9 ? d.getDate() : "0" + d.getDate();
  var youWant = d.getFullYear() + "." + yue + "." + re;
  return youWant;
};
export default function Index() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const query = window.location.pathname.substring(13);
    const fetch = async () => {
      const res = await axios.get(`https://api.fsn365.com/txns/${query}`);
      setData(res.data.data);
    };
    fetch();
  }, []);
  return (
    <div className="hash-container">
      <Head />
      <div className="box-header">
        <h3>
          Tx <span style={{ fontSize: "15px" }}>#TimeLock</span>
        </h3>
      </div>
      {data && (
        <div className="detail">
          <div className="detail-content">
            <div className="jss193">
              <p>
                <span style={{ paddingTop: "15px" }}>Hash:</span>
                <a
                  href="https://api.fsn365.com/txn/0xf38301445285c41d4b186c5931462c0eaf1c27170bec6b6dc8b61065bf64b8b9/detail"
                  style={{ color: "#3A98DB" }}
                >
                  {data.hash}
                </a>
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Lock Type:</span>
                {data.type}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Value:</span>
                {data.txnFee + " FSN"}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Duration:</span>
                1970.01.01() ~ Forever
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Tx Status:</span>
                {data.cost}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Block:</span>
                {data.bk}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>From:</span>
                {data.from}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>To:</span>
                {data.to + " FSN"}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Time:</span>
                {`${timer(data.timestamp * 1000)}`}
              </p>
              <hr className="jss197"></hr>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
