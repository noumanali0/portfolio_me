import React from "react";
import Html from "./Html";
import Javascript from "./javascript";
import Mern from "./Mern";
import ReactSkill from "./React";
import Mongodb from "./Mongodb";
import Node from "./Node";
import Express from "./Express";
import Oop from "./Oop";
import Datastructures from "./Datastructures";
import Jquery from "./Jquery";
import Git from "./Git";

const Skill = () => {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-7 offset-2 mt-3 containerr" data-aos="fade-up">
            <h1
              className="display-6"
              style={{
                fontWeight: "bold",
                color: "#6372ff",
              }}
            >
              Skills
            </h1>
            <div className="py-3 d-flex justify-content-center">
              <div className="w-50 h-50 mx-3 shadow-lg">
                <h2 className=" my-2 text-center p-2">Javascript</h2>
                <div className="d-flex justify-content-center p-3">
                  <Javascript />
                </div>
              </div>
              <div className="w-50 h-50 mx-3 shadow-lg">
                <h2 className=" my-2 text-center p-2">Mern</h2>
                <div className="d-flex justify-content-center p-3">
                  <Mern />
                </div>
              </div>
              <div className="w-50 h-50 mx-3 shadow-lg">
                <h2 className=" my-2 text-center p-2">Html</h2>
                <div className="d-flex justify-content-center p-3">
                  <Html />
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-7 shadow-lg m-2 rounded-2 ">
                <h4 className="p-2">React</h4>
                <div className="mx-2 mb-2">
                  <ReactSkill />
                </div>
              </div>
              <div className="col-7 shadow-lg m-2 rounded-2">
                <h4 className="p-2">MongoDB</h4>
                <div className="mx-2 mb-2">
                  <Mongodb />
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-7 shadow-lg m-2 rounded-2">
                <h4 className="p-2">NodeJs</h4>
                <div className="mx-2 mb-2">
                  <Node />
                </div>
              </div>
              <div className="col-7 shadow-lg m-2 rounded-2">
                <h4 className="p-2">ExpressJs</h4>
                <div className="mx-2 mb-2">
                  <Express />
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-7 shadow-lg m-2 rounded-2">
                <h4 className="p-2">OOP</h4>
                <div className="mx-2 mb-2">
                  <Oop />
                </div>
              </div>
              <div className="col-7 shadow-lg m-2 rounded-2">
                <h4 className="p-2">Data Structures</h4>
                <div className="mx-2 mb-2">
                  <Datastructures />
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-7 shadow-lg m-2 rounded-2">
                <h4 className="p-2">Git</h4>
                <div className="mx-2 mb-2">
                  <Git />
                </div>
              </div>
              <div className="col-7 shadow-lg m-2 rounded-2">
                <h4 className="p-2">JQuery</h4>
                <div className="mx-2 mb-2">
                  <Jquery />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
