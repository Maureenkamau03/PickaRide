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
                    <div className="icons">
                    <a href="https://www.facebook.com/ronald.beloved/" rel="noopener">
                        <img src="https://cdn-icons-png.flaticon.com/128/1312/1312139.png" alt=""/>
                    </a>
                    <a href="https://twitter.com/RonaahB" rel="noopener">
                        <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt=""/>
                    </a>
                    <a href="https://www.linkedin.com/in/ronald-kipchirchir-034983246/" rel="noopener">
                        <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt=""/>
                    </a>
                    </div>
                    <div className="icons">
                    <a  href="/" rel="noopener">
                        <img src="https://cdn-icons-png.flaticon.com/128/4391/4391603.png" alt=""/>
                    </a>
                    <a href="" rel="noopener">
                        <img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt=""/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCoO82bia4WfA19iLEVUX2iw" rel="noopener">
                        <img src="https://cdn-icons-png.flaticon.com/128/3938/3938026.png" alt=""/>
                    </a>
                    </div>
                </div>
                <div className="copyright">
                    <p>All rights reserved &copy;</p>
                    <p>CopyRight By Car Dealers Moringa School</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;