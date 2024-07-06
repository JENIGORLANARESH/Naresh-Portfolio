import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="Contact" className="contact">
      <div className="row justify-content-center d-flex">
        <h1 className="text-center mt-5">Contact Me</h1>
        <hr className="break bg-success"></hr>
        <p className="text-center mb-sm-5">Let's get connected</p>

        <div className="col-sm-6 d-flex justify-content-center">
          <div className="bg-light box10 mb-5 rounded-4 custom-shadow">
            <h2 className="text-center pt-4">Social Profiles</h2>
            <ul className="text-center pb-4 Icons">
              <li className="d-inline-block p-sm-3 ">
                <a href="https://www.linkedin.com/in/jenigorlanaresh/">
                  <i className="fa-brands fa-linkedin-in fa-3x i-in text-primary"></i>
                </a>
              </li>
              <li className="d-inline-block p-sm-3">
                <a href="https://github.com/JENIGORLANARESH">
                  <i className="fa-brands fa-github fa-3x bg-light text-secondary"></i>
                </a>
              </li>
              <li className="d-inline-block p-sm-3">
                <a href="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram fa-3x i-insta text-danger"></i>
                </a>
              </li>
              <li className="d-inline-block p-sm-3">
                <a href="mailto:nareshjenigorla@gmail.com">
                  <i className="fa-solid fa-envelope fa-3x bg-light text-success"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
