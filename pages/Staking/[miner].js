import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/Link";

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
    const query = window.location.pathname.substring(8);
    const fetch = async () => {
      const res = await axios.get(`https://api.fsn365.com/stats/${query}`);
      setData(res.data.data);
      //   console.log(res.data);
    };
    fetch();
  }, []);
  // console.log(data);

  return (
    <div className="xx-container">
      <Head />
      <div className="box-header">
        <h3>Address Detail</h3>
      </div>
      {data && (
        <div className="detail">
          <header>
            <p className="detail-head">
              <strong>Overview</strong>
            </p>
          </header>
          <div className="detail-content">
            <div className="jss193">
              <p>
                <span>Address:</span>
                {data.id}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Assets Held:</span>
                {data.assetsHeld}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>FSN Balance:</span>
                {data.fsn + " FSN"}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>FSN Ownership:</span>
                {data.fsnOwn + " FSN"}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Latest Active Time:</span>
                {`${timer(data.lActTime * 1000)}`}
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
