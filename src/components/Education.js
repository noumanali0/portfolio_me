import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";

const Education = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-4">
            <h1
              className="display-6 headings"
              style={{
                fontWeight: "bold",
                color: "#6372ff",
              }}
            >
              Education
            </h1>
          </div>
          <div className="col-6 mt-3 d-flex mt-5 about-sec " data-aos="fade-up">
            <div className="">
              <MdOutlineCastForEducation size={30} />
            </div>
            <div>
              <p
                className="px-3 py-1"
                style={{
                  fontWeight: "bold",
                  color: "#6372ff",
                  fontSize: "15px",
                }}
                data-aos="fade-up"
              >
                08/2018 - Present
              </p>
              <h2 className="px-3" style={{ fontWeight: "bold" }}>
                Bachelors in Computer Science
              </h2>
              <h4 className="px-3">Sukkur Iba University</h4>
              <h6 className="text-muted px-3 ">Major</h6>
              <ul>
                <li>Data Structure</li>
                <li>Database</li>
                <li>Object Oriented Programming</li>
                <li>Design And Analysis of Algorithms</li>
                <li>Operating System</li>
                <li>Web Development</li>
                <li>Software Engineering</li>
                <li>Enterprise Application</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
