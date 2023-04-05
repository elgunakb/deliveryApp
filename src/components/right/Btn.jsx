import React, { useState } from "react";
import "./btn.css";

const Btn = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button className="buy__btn" onClick={() => setShowPopup(true)}>
        BUY
      </button>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button
              className="close-button"
              onClick={() => setShowPopup(false)}
            >
              X
            </button>
            <div className="inputs">
              <h6>Shipping adress</h6>
              <div className="input1">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
              </div>
              <div className="input2">
                <input type="text" placeholder="Adress" />
                <input type="text" placeholder="Apartment, suite" />
              </div>
              <h6 style={{ marginTop: "20px" }}>Payment method</h6>
              <p style={{ marginTop: "20px", display: "flex" }}>
                Choose the payment method :
              </p>
              <div style={{ display: "flex", marginTop: "12px" }}>
                <input type="radio" name="paymentMethod" />
                <p style={{ marginRight: "12px" }}>Card</p>
                <input type="radio" name="paymentMethod" />
                <p style={{ marginRight: "12px" }}>Cash on delivery</p>
              </div>
              <div className="input2">
                <input type="text" placeholder="Card number" />
              </div>
              <div style={{ display: "flex", marginTop: "12px" }}>
                <h6>Expiry date</h6>
              </div>
              <div className="input1">
                <input type="text" placeholder="MM/YY" />
                <input type="text" placeholder="CV2/CVC" />
              </div>
            </div>
            <button className="check__out">Check out</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Btn;
