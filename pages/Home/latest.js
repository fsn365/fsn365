import React, {useState,useEffect} from 'react';
import {getLatest} from '../api'

const latest = () =>{
    // 获取数据
    const [bks,getBks] = useState([])
    const [txs,getTxs] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
          const result = await getLatest()
          if (result.data === undefined) {
            fetchData();
            return;
          }
        getBks(result.data.bks)
        getTxs(result.data.txs)
        };
        fetchData()
      },[ ])
    return(
        <div className="latestbox">
            <div className="boxlist1">
                <p>Latest Txns <a href="/">View All</a></p>
                {
                    txs.map((row)=>{
                        // 时间戳转换
                        let stamp = row.timestamp*1000;
                        let d = new Date(stamp)
                        let date = (d.getFullYear()) + "-" + 
                                (d.getMonth() + 1) + "-" +
                                (d.getDate()) + " " + 
                                (d.getHours()) + ":" + 
                                (d.getMinutes()) + ":" + 
                                (d.getSeconds());
                        let times = new Date().getDate()-d.getDate()
                        return(
                            <div className="txsro" key = {row.hash}>
                                <div className="lohead">Txn</div>
                                <div className="rowhash">
                                    <a href="/">{row.hash.slice(0,14)}...</a>
                                    <p>{times} days ago</p>
                                </div>
                                <div className="fromto">
                                    <p>From<a href="/">{row.from.slice(0,8)}...</a></p>
                                    <p>To<a href="/">{row.to.slice(0,8)}...</a></p>
                                </div>
                                <div className="type">
                                    {row.type}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            <div className="boxlist2">
            <p>Latest Blocks<a href="/">View All</a></p>
                {
                    bks.map((row)=>{
                        return(
                            <div className="txsro" key = {row.height}>
                                <div className="loheads">Bk</div>
                                <div className="rowhash">
                                    <a href="/">{row.height}...</a>
                                    <p>{row.timestamp}</p>
                                </div>
                                <div className="fromto">
                                    <p>Miner<a href="/">{row.miner.slice(0,8)}...</a></p>
                                    <span><a href="/">{row.txns}txns</a> in block.</span>
                                </div>
                                <div className="type">
                                    <span>{row.reward}</span> FSN
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default latest