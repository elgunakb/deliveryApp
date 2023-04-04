import React from "react";
import Carousel from "./Carousel";
import Tab from "../components/Tabs/TAb";
import Cards from "../components/Cards/Cards";
import Circle1 from "../assets/images/circle.svg";
import Service1 from "../assets/images/service1.svg";
import Service2 from "../assets/images/service2.svg";
import Service3 from "../assets/images/service3.svg";
import Footers from "../assets/images/Frame 135.svg";

const Home = () => {
  const [food, setFood] = React.useState("All");

  return (
    <div>
      <section className="section1">
        <Carousel />
      </section>
      <div className="circle1">
        <img src={Circle1} alt="circle" />
      </div>
      <section className="section2">
        <div className="container">
          <div className="features">
            <div className="feature__title">
              <h5>What we serve?</h5>
              <h3>Just sit back at home we will take care</h3>
            </div>
            <div className="feature__subtitle">
              <div>
                <img
                  style={{ width: "207px", height: "207px" }}
                  src={Service1}
                  alt="service_image"
                />
                <h3
                  style={{
                    color: "#ed1940",
                    fontSize: "30px",
                    // marginLeft: "30px",
                  }}
                >
                  Easy to Order
                </h3>
              </div>
              <div>
                <img
                  style={{ width: "207px", height: "207px" }}
                  src={Service2}
                  alt="service_image"
                />
                <h3
                  style={{
                    color: "#ed1940",
                    fontSize: "30px",
                  }}
                >
                  Best quality
                </h3>
              </div>
              <div>
                <img
                  style={{ width: "207px", height: "207px" }}
                  src={Service3}
                  alt="service_image"
                />
                <h3
                  style={{
                    color: "#ed1940",
                    fontSize: "30px",
                  }}
                >
                  Fastest delivery
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tab" className="section3">
        <div className="container">
          <Tab setFood={setFood} food={food} />
        </div>
      </section>
      <section>
        <div className="container">
          <div style={{ height: "100%" }}>
            <Cards style={{ height: "100%" }} food={food} />
          </div>
        </div>
      </section>
      <img
        className="container"
        style={{ width: "100%" }}
        src={Footers}
        alt="footer"
      />
    </div>
  );
};

export default Home;
