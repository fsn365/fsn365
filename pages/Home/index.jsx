import React, { useEffect,useState } from 'react';
import './home.less'
import Latest from './latest'

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

import {getStats} from '../api'
const home = ()=>{
    const [rows,getrows] = useState([])
    const [text, setText] = useState("All Filters");
    useEffect(()=>{
        const homestats = async ()=>{
            const state = await getStats()
            if (state.data === undefined) {
                homestats();
                return;
              }
            getrows(state.data)
        }
        homestats()
    },[])

    const [menuisShow, setmenuisShow] = useState(false);

    const setmenuShow = (e, a) => {
        e.nativeEvent.stopImmediatePropagation();
        e.stopPropagation();
        setmenuisShow(a);
    };

    const setTexts = (a) => {
        setText(a);
        setmenuisShow(false);
    };

    const changeEvent = (v) => {
        console.log(v.target.value)
    }
    return(
       <div className="homebox">
           {/* search */}
                <div className="searchbox">
                    <h6 className="MuiTypography-root">Fusion Blockchain Explorer</h6>
                    <div className="MuiOutlinedInput-root">
                        {/* 下拉选项 */}
                        <div className="nav-menubox menubox">
                            <button className="nav-btn" onClick={(e) => setmenuShow(e, true)}>
                                {`${text}`}
                            </button>
                            <div className={menuisShow ? "nav-show-box nav-show" : "nav-show-box nav-onshow"} >
                                <div onClick={() => setTexts("All Filters")}>All Filters</div>
                                <div onClick={() => setTexts("Asset")}>Asset</div>
                                <div onClick={() => setTexts("Address")}>Address</div>
                                <div onClick={() => setTexts("Transactions")}>Transactions</div>
                            </div>
                        </div>
                        {/* 搜索框 */}
                        <input className="MuiInputBase-input" placeholder="Search by Address/Tx Hash/Asset" type="text" onChange={(e)=>changeEvent(e)} />
                        {/* 搜索按钮 */}
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className="homebtn"
                            startIcon={<SearchIcon />}
                        >
                        </Button>
                    </div>
                </div>
                {
                    rows.length===0?<div className="pricebox">{/*加载动画*/}<CircularProgress /></div>: <div className="pricebox">
                        {/* 梅开八度 ☟ */}
                        <div>
                            <h4>Price($)</h4>
                            <p>$ {rows.priceData.price}</p>
                        </div>
                        <div>
                            <h4>Addresses</h4>
                            <p>{rows.address}</p>
                        </div>
                        <div>
                            <h4>Swaps</h4>
                            <p>{rows.swaps}</p>
                        </div>
                        <div>
                            <h4>Online Miners</h4>
                            <p>{rows.priceData.price}</p>
                        </div>
                        <div>
                            <h4>MarketCap</h4>
                            <p>{rows.priceData.mcap}</p>
                        </div>
                        <div>
                            <h4>Block Height</h4>
                            <p>{rows.height}</p>
                        </div>
                        <div>
                            <h4>Tokens</h4>
                            <p>{rows.txns}</p>
                        </div>
                        <div>
                            <h4>Tickets</h4>
                            <p>{rows.txns}</p>
                        </div>
                  </div>
                }
                <Latest/>
            </div>
    )
}


export default home;


