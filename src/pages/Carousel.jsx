import React from "react";
import Slide1 from "../assets/images/banner1.svg";
import Slide2 from "../assets/images/banner2.svg";
import Slide3 from "../assets/images/banner3.svg";
import ImageSlider, { Slide } from "react-auto-image-slider";

const Carousel = () => {
  return (
    <ImageSlider effectDelay={300} autoPlayDelay={2000}>
      <Slide>
        <img alt="slide_1" src={Slide1} />
      </Slide>
      <Slide>
        <img alt="slide_2" src={Slide2} />
      </Slide>
      <Slide>
        <img alt="slide_3" src={Slide3} />
      </Slide>
    </ImageSlider>
  );
};

export default Carousel;
