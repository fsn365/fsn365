import React, { useEffect,useState } from 'react';
import './index.less'

import Head from '../Public/Head'
import Footer from '../Public/Footer'

const staking = () => {
    
    return (
        <div>
            <Head/>
            <div className="stakingbox">
                <h2>
                    Fusion Staking
                </h2>
                <div className="stakinglist">
                    <p className="listtitle">1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                </div>
            </div>
            <div className="footerr"><Footer /></div>
            
        </div>
    );
}

export default staking;
