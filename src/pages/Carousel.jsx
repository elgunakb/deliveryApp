import React, { useState } from "react";
import Slide1 from "../assets/images/banner1.svg";
import Slide2 from "../assets/images/banner2.svg";
import Slide3 from "../assets/images/banner3.svg";
import ImageSlider, { Slide } from "react-auto-image-slider";

const Carousel = () => {
  const [buttonPosition, setButtonPosition] = useState("50%"); // Initial button position

  const handleSlideChange = (currentSlide) => {
    if (currentSlide === 1) {
      setButtonPosition("50%"); // Change button position for slide 2
    } else {
      setButtonPosition("50%"); // Reset button position for other slides
    }
  };

  return (
    <ImageSlider
      effectDelay={300}
      autoPlayDelay={2000}
      onSlideChange={handleSlideChange}
    >
      <Slide>
        <img alt="slide_1" src={Slide1} />
      </Slide>
      <Slide>
        <img alt="slide_2" src={Slide2} />
      </Slide>
      <Slide>
        <div style={{ position: "relative" }}>
          <img alt="slide_3" src={Slide3} />
          <button className="slide__btn"
            style={{
              position: "absolute",
              left: "16.61%",
              top: "61.8%",
              width: "132px",
              height: "48px",
              borderRadius: "16px",
              border: "none",
              backgroundColor: "red",
              cursor: "pointer",
              color: "white",
            }}
          >
            <a style={{width:"100%"}} href="http://localhost:3000/cart">Order now</a>
          </button>
        </div>
      </Slide>
    </ImageSlider>
  );
};

export default Carousel;
