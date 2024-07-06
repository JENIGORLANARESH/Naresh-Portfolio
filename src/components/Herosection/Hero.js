import React from "react";
import "./Hero.css";
import naresh from "../../assets/naresh-image.jpeg";

function Herosection() {
  return (
    <div id="Hero" className="container">
      <div className="row ">
        <div className="left col-sm-6">
          <img src={naresh} alt="background"></img>
        </div>

        <div className="right col-sm-6 align-items-center justify-content-center d-flex ">
          <div className="details align-items-center justify-content-center align-items-center text-center">
            <h4 className="text-success mb-3">
              <strong>Hi all 👋 I'm </strong>
            </h4>
            <h1 className="hero-title">
              <strong>Jenigorla Naresh</strong>
            </h1>
            <div className="d-inline-block">
              <ul className="text-center h4 list-unstyled">
                <li>
                  <strong>A Web Developer</strong>
                </li>
                <li>
                  <strong>A Java Developer</strong>
                </li>
                <li>
                  <strong>A Tech Enthusiast</strong>
                </li>
              </ul>
            </div>

            <p className="text-center mt-5 description">
              A passionate Full Stack Software Developer with extensive
              experience in building web applications using JavaScript,
              React.js, Node.js, and other cool libraries and frameworks.
              Additionally, I have a strong command of Java, which further
              enhances my ability to develop robust and scalable applications.
            </p>
            <a
              className="btn btn-success btn-lg border-0 primary-btn-shadow"
              href="#Contact"
              role="button"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
