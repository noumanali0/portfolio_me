import React from "react";
import { HiBriefcase } from "react-icons/hi";

const Experience = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-4 headings">
            <h1
              className="display-6"
              style={{
                fontWeight: "bold",
                color: "#6372ff",
              }}
            >
              Experience
            </h1>
          </div>
          <div
            className="col-6 mt-5 d-flex justify-content-center about-sec"
            data-aos="fade-up"
          >
            <div className="">
              <HiBriefcase size={30} />
            </div>
            <div className="">
              <p
                className="px-3 py-1"
                style={{
                  fontWeight: "bold",
                  color: "#6372ff",
                  fontSize: "15px",
                }}
              >
                03/2019 - 08/2021
              </p>
              <h2 className="px-3" style={{ fontWeight: "bold" }}>
                Fiver
              </h2>
              <h4 className="px-3">Freelancer</h4>
              <p className="text-muted px-3">
                Worked as a freelancer for almost 2 years and in that period of
                time, obtained experience working on diﬀerent projects related
                to Mern-stack
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
