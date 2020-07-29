import React from 'react'
import Head from './Public/Head'
import Footer from './Public/Footer'
import Home from './Home/index'
import './index.less'
export default function home(){
    return(
        <div className="container"> 
            {/* <Search/> */}
            <Head/>
            <Home/>
            <Footer/>
        </div>
    )
}