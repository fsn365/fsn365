import React, { useEffect,useState } from 'react';
import './home.less'
import Latest from './latest'

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

import {getStats} from '../api'
const home = ()=>{
    const [rows,getrows] = useState([])
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
    return(
       <div className="homebox">
                <div className="searchbox">
                    <h6 className="MuiTypography-root">Fusion Blockchain Explorer</h6>
                    <div className="MuiOutlinedInput-root">
                        <input className="MuiInputBase-input" placeholder="Search by Address/Tx Hash/Asset" type="text" onChange={(e)=>this.changeEvent(e)} />
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
                    rows.length===0?<div className="pricebox"><CircularProgress /></div>: <div className="pricebox">
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


