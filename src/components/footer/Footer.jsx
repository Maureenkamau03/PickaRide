import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer>
            <div className="line">
                    <hr/>
                    <hr/>
                </div>
            <div className="footer">
                <div className="icon">
                    <h2>Our company</h2>
                    <p>Follow us on</p>
                    <div className="icons">
                    <a href="https://www.facebook.com/ronald.beloved/" rel="noopener">
                        <img src="https://cdn-icons-png.flaticon.com/128/4401/4401395.png" alt=""/>
                    </a>
                    <a href="https://twitter.com/RonaahB" rel="noopener">
                        <img src="https://cdn-icons-png.flaticon.com/128/2504/2504839.png" alt=""/>
                    </a>
                    <a href="insta" rel="noopener">
                        <img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt=""/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCoO82bia4WfA19iLEVUX2iw" rel="noopener">
                        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt=""/>
                    </a>
                    </div>
                </div>
                <div>
                    <h2>Products</h2>
                </div>
                <div>
                    <h2>customers</h2>
                </div>
                <div>
                    <h2>terms and conditions</h2>
                </div>
                <div className="copyright">
                    <p>All rights reserved &copy;</p>
                    <p>CopyRight By Pickaride</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;