import React from "react";
import "./About.css";
import image from "../../assets/logo-college.jpeg"

function About() {
  return (
    <div id="About">
      <div className="pb-3 container-fluid about">
        <div className="about-details rounded row mt-sm-5 mb-sm-5 justify-content-center d-flex">
          <p className="text-center text-success mt-5">Some Lines About My Self</p>
          <h1 className="text-center">ABOUT ME</h1>
          <hr className="bg-success hr-break"></hr>
          <p className="text-center">This section shows you brief info about me.</p>

          <div className="row d-flex flex-column-reverse flex-sm-row custom-shadow">

            <div className="first col-md-6 float-start text-center rounded">
              <div className="row d-flex">
                <div className="col text-center">
                  <div className="mt-3 ms-md-5">
                    <img className="logo-college mx-auto" src={image} alt="logo"></img>
                    <p><b></b></p>
                    <h4><b>Amrita Sai Institute of Science and Technology</b></h4>
                    <b>CSE</b>
                    <p></p>
                    <p>Amrita Sai Institute of Science and Technology Paritala is my institute from where I have completed my B.Tech in Computer Science and Engineering Branch.</p>
                    <p>My year of graduation is 2k21-25.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="second col-sm-6 float-sm-end text-center rounded d-flex align-items-center justify-content-center">
              <div className="container pb-sm-5">
                <div id="tab-1" className="tab-content current px-sm-5 text-center">
                  <div>
                    <div className="row">
                      <div className="">
                        <p><b>Name:</b><span>Jenigorla Naresh</span></p>
                        <p><b>Age:</b> <span>20</span></p>
                        <p><b>Address:</b><span>Vijayawada, INDIA</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
