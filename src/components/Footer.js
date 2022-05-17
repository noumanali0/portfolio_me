import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import emailjs from "@emailjs/browser";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "service_9sbnlgk",
        "template_o3d195y",
        e.target,
        "_0S-4yPiYPRhu7q21"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          clearState();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div id="contact">
          <div className="container">
            <div className="col-md-8 offset-md-2">
              <div className="row">
                <div className="section-title mb-2">
                  <h2>Get In Touch</h2>
                </div>
                <form
                  name="sentMessage"
                  id="myForm"
                  validate={true}
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <h2 className="pb-2">Links</h2>
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/noumanalie/">
                        <FaLinkedin size={30} color="white" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/noumanali0">
                        <FaGithub size={30} color="white" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/noumanjaffar/">
                        <FaInstagram size={30} color="white" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
