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
      const res = await axios.get(`https://api.fsn365.com/blocks/${query}`);
      setData(res.data.data);
      console.log(res.data);
    };
    fetch();
  }, []);
  //   console.log(data);

  return (
    <div className="heightcontainer">
      <Head />
      <div className="box-header">
        <h3>
          Block
          <small style={{ paddingLeft: "8px", fontSize: "13px" }}>
            {`#` + `${data && data.height}`}
          </small>
        </h3>
      </div>
      {data && (
        <div className="height">
          <div className="height-content">
            <div className="jss193">
              <p>
                <span>Height:</span>
                <a
                  href="https://api.fsn365.com/block/2596122"
                  style={{ color: "#3A98DB" }}
                >
                  {data.height}
                </a>
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Age:</span>
                {`${timer(data.timestamp * 1000)}`}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Transations:</span>
                <a
                  href="https://api.fsn365.com/txn?bk=2596121"
                  style={{ color: "#3A98DB" }}
                >
                  {data.txns} &nbsp;
                </a>
                txns in block
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Block Miner:</span>
                <Link href={`/staking/${data.miner}`}>
                  <a style={{ color: "#3A98DB" }}>{data.miner}</a>
                </Link>
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Block Rewards:</span>
                {data.reward + " FSN"}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Difficult：</span>
                {data.difficulty}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span> Total Difficult：</span>
                {data.totalDifficulty}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Size:</span>
                {data.size}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Gas Limit:</span>
                {data.gasLimit}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Parent Hash:</span>
                {data.parentHash}
              </p>
              <hr className="jss197"></hr>
            </div>
            <div className="jss193">
              <p>
                <span>Hash:</span>
                {data.hash}
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
