import "./Footer.scss";
import React from "react";
import TgIcon from "../../assets/images/tg__ic.svg";
import IgIcon from "../../assets/images/ig__ic.svg";
import FbIcon from "../../assets/images/fb__ic.svg";
import Footers from "../../assets/images/Frame 135.svg";
import WpIcon from "../../assets/images/whatsapp__icon.svg";


const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer>
          <div className="footer__top">
            <div>
              <img style={{width:"100%"}} src={Footers} alt="" />
            </div>
          </div>
        </footer>
      </div>{" "}
      <div className="footer__bottom">
        <div className="left__bot">
          <p>Contact us</p>
          <p>Categories</p>
          <p>About us</p>
        </div>
        <div className="right__bot">
          <ul>
            <li>
              <a href="https://wa.me/994777178117?text=Hello%2C%20I%20have%20a%20question%20about%20your%20service.">
                <img src={WpIcon} alt="" />
              </a>
            </li>
            <li>
              <img src={TgIcon} alt="" />
            </li>
            <li>
              <img src={IgIcon} alt="" />
            </li>
            <li>
              <img src={FbIcon} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{/* <div className="left__top">
  <h2>
    <span>Are you ready to </span> order?
  </h2>
</div>
<div className="right__top">
  <a href="/" tabIndex="0">
    <img
      className="bn46"
      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
      alt="bn45"
    />
  </a>
  <a href="/" tabIndex="0">
    <img
      className="bn45"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
      alt="bn45"
    />
  </a>
</div> */}