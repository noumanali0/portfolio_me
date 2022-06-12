import React from "react";
import img from "../images/IMG_3338.jpg";
import pdf from "../assets/Resume.pdf";
import slider from "../images/Bounce-arrow1.webp";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "280px" }}>
          <div className="d-flex justify-content-center mb-4" margin>
            <img src={slider} width="5%" height="" alt="alt" />
          </div>
          <div className="col-6 containerr" data-aos="fade-up">
            <img className="w-75 h-75 rounded" src={img} alt="notFound" />
          </div>

          <div className="col-4 h-100 mt-5 about-sec" data-aos="fade-up">
            <h1 className="display-4" style={{ fontWeight: "bold" }}>
              About me
            </h1>
            <p className="text-muted">
              A software developer,having some other moods apart from working
              love to eat healthy food, morning bike riding,and a sunday morning
              street running.
            </p>
            <div className="d-flex">
              <div className="d-block">
                <h6 className="">Name:</h6>
                <h6 className="">DOB:</h6>
                <h6 className="">Location:</h6>
                <h6 className="">Email:</h6>
              </div>
              <div className="d-block px-2">
                <h6 className="text-muted ">Nouman Ali</h6>
                <h6 className="text-muted ">Jan 09,1998</h6>
                <h6 className="text-muted ">Daharki,Pakistan</h6>
                <h6 className="text-muted ">alinouman278@gmail.com</h6>
              </div>
            </div>

            <div>
              <a href={pdf} target="_blank" rel="noreferrer" download="Resume">
                <button className="btn btn-outline-secondary">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
