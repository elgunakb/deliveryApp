import React from "react";
import "./Footer.scss";
import TgIcon from "../../assets/images/tg__ic.svg";
import FbIcon from "../../assets/images/fb__ic.svg";
import IgIcon from "../../assets/images/ig__ic.svg";
import WpIcon from "../../assets/images/whatsapp__icon.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer__nav">
        <p>Contact us</p>
        <p>Categories</p>
        <p>About us</p>
      </div>
      <div className="footer__socials">
        <ul>
          <li>
            <a href="https://wa.me/994777178117?text=Hello%2C%20I%20have%20a%20question%20about%20your%20service.">
              <img src={WpIcon} alt="whatsapp_icon" />
            </a>
          </li>
          <li>
            <img src={TgIcon} alt="telegram_icon" />
          </li>
          <li>
            <img src={IgIcon} alt="instagram_icon" />
          </li>
          <li>
            <img src={FbIcon} alt="facebook_icon" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
