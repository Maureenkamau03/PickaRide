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
                    <a href="https://www.facebook.com/ronald.beloved/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/128/4401/4401395.png" alt=""/>
                    </a>
                    <a href="https://www.instagram.com/ronaah_254/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt=""/>
                    </a>
                    <a href="https://twitter.com/RonaahB" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/128/2504/2504839.png" alt=""/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCoO82bia4WfA19iLEVUX2iw" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt=""/>
                    </a>
                    </div>
                </div>
                <div className="customer">
                    <h2>customers</h2>
                    <a href="https://www.quora.com/What-is-your-best-car-dealership-story" target="_blank" rel="noopener noreferrer">customer support</a>
                    <br></br>
                    <br></br>
                    <a href="https://www.quora.com/What-are-car-dealership-employees%E2%80%99-best-stories-of-crazy-customers-things-found-in-cars" target="_blank" rel="noopener noreferrer">after sales services</a>
                </div>
                <div className="copyright">
                <h2>terms and conditions</h2>
                    <a href="https://technologyadvice.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy and Policy</a>
                    <p>All rights reserved &copy;</p>
                    <p>CopyRight By Pickaride</p>
                </div>
                <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Ngong%20Lane%20Plaza,%20Ngong%20Lane,%20Nairobi,Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/">divi discount</a><a href="https://www.embedgooglemap.net">embed maps on website</a></div></div>
            </div>
        </footer>
    );
}

export default Footer;