import React, { useEffect, useState } from "react";
import "./index.less";

import Head from "../Public/Head";
import Footer from "../Public/Footer";

const staking = () => {
  return (
    <div className="container">
      <Head />
      <div className="box-header">
        <h3>Fusion Staking</h3>
      </div>
      {/* {data && ( */}
      <div className="detail">
        <header>
          <p className="detail-head">
            <strong>Summary</strong>
          </p>
        </header>
        <div className="detail-content">
          <div className="jss193">
            <p>
              <span>Tickets:</span>
              {/* {data.id} */}
            </p>
            <hr className="jss197"></hr>
          </div>
          <div className="jss193">
            <p>
              <span>Online Miners:</span>
              {/* {data.assetsHeld} */}
            </p>
            <hr className="jss197"></hr>
          </div>
          <div className="jss193">
            <p>
              <span>Historical Miners:</span>
              {/* {data.fsn + " FSN"} */}
            </p>
            <hr className="jss197"></hr>
          </div>
          <div className="jss193">
            <p>
              <span>Block Rewards:</span>
              {/* {data.fsnOwn + " FSN"} */}
            </p>
            <hr className="jss197"></hr>
          </div>
        </div>
      </div>
      ){/* } */}
      <Footer />
    </div>
  );
};

export default staking;
