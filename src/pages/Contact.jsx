import React from "react";
import "../style/pages/Contact.scss";
import Map from "../components/Map/Map";
import Line from "../assets/images/Vector 1788.svg";
import EmailIc from "../assets/images/email__ic.svg";
import AdressIc from "../assets/images/adress__ic.svg";
import ContactIc from "../assets/images/contact__ic.svg";

const Contact = () => {
  return (
    <div className="contact_full">
      <div className="container">
        <div className="contact">
          <div className="contact__title">
            <h2>Contact us</h2>
          </div>
          <img className="line" src={Line} alt="line" />
          <div className="contact__cards">
            <div className="contact__card">
              <div
                style={{
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <img src={AdressIc} alt="adress_icon" />
              </div>
              <h5>Adress</h5>
              <p>Ünvan: Bakı, Mikayıl Müşfiq </p>
            </div>
            <div
              style={{ textAlign: "center", alignItems: "center" }}
              className="contact__card"
            >
              <img src={EmailIc} alt="email_icon" />
              <h5>Email us</h5>
              <p>Email: info@azergold.az</p>
            </div>
            <div
              style={{ textAlign: "center", alignItems: "center" }}
              className="contact__card"
            >
              <img src={ContactIc} alt="contact_icon" />
              <h5>Contact us</h5>
              <p>Telefon: +994 12 505 02 02</p>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: "44px" }} className="map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
