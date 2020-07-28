import React from 'react'
import Head from './Public/Head'
import Footer from './Public/Footer'
import './index.less'
export default function home(){
    return(
        <div className="container"> 
            {/* <Search/> */}
            <Head/>
            <Footer/>
        </div>
    )
}