import React from 'react'
import Link from 'next/link';
import './footer.less'
export default function Footer(){
    return(
        <footer className="box-footer">
            <section className="footer">
                <div className="box-content">
                    <p className="f-word">
                        Powered by
                        <a href="https://www.fusion.org/" target="_blank"><strong>Fusion Network</strong></a>
                          and
                        <a href="https://fsn.dev/" target="_blank"><strong>FOSC</strong></a>.
                    </p>
                    <small>
                        I'd like to say thanks to FOSC Tech Lead
                        <a href="https://github.com/zhaojun-sh" target="_blank"><strong>zhaojun</strong></a>and other contributors.
                    </small>
                </div>
                <div className="box-content">
                    <p className="f-word">
                        <strong>Suggestion and Contribution</strong>
                    </p>
                    <small>Suggestions and contributions are welcomed. Please click 
                        <a href="https://t.me/fusionfrontier" target="_blank"><strong>here</strong>.</a>
                    </small>
                    <br/>
                    <small>Wanna view project progress? Please click 
                        <a href="https://trello.com/b/juRQ9fgM/fusion-block-browser" target="_blank"><strong>here</strong>.</a>
                    </small>
                </div>
                <div className="box-content">
                    <p className="f-word"><strong>About</strong></p>
                    <small className="about">Made with <svg className="MuiSvgIcon-root red" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg> and 
                    <svg className="MuiSvgIcon-root blank" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"></path></svg> by <a href="https://t.me/yocnkc" target="_blank"> <strong>Kate</strong>.</a></small>
                    <small><strong>Donation:</strong><a href="/address/10139396/">10139396</a></small>
                </div>
            </section>
        </footer>
        
    )
}