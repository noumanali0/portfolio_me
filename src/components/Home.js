import React from "react";
import Typical from "react-typical";
import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  return (
    <>
      <div className="container" data-aos="fade-up">
        <div style={{ marginTop: "300px" }}>
          <div className="row">
            <h3 className="text-center">Hey! I am</h3>
          </div>
          <div className="row text-center">
            <h1
              className="text-center display-4"
              style={{ fontWeight: "bold" }}
            >
              Nouman Ali
            </h1>
            <h2 className="">
              I am
              <span style={{ color: " #3e64ff" }}>
                <Typical
                  className="d-inline"
                  steps={[
                    " React developer.",
                    2500,
                    " Mern-Stack developer.",
                    2500,
                    " Full-Stack developer.",
                    2500,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
