import React from "react";
import "./Hero.css";

function Herosection() {
  return (
    <div id="Hero" className="container">
      <div className="row ">
        <div className="left col-sm-6">
          <img src="https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg" alt="background"></img>
        </div>

        <div className="right col-sm-6 align-items-center justify-content-center d-flex ">
          
          <div className="details align-items-center justify-content-center align-items-center text-center">
              <h4 className="text-success mb-3"><strong>Hello i am....</strong></h4>
              <h1 className="hero-title"><strong>Jenigorla Naresh</strong></h1>
              <div className="d-inline-block">
                <ul className="text-center h4 list-unstyled">
                  <li><strong>A Web Developer</strong></li>
                  <li><strong>A Software Analyst</strong></li>
                  <li><strong>An FSD Enthusiast</strong></li>
                </ul>
              </div>

              <p className="text-center mt-5 description" >
                Thanks for landing on my profile.
                I'm an ambitious,disciplined and visionary person. 
                I believe in competing with myself rather than others, 
                for becoming better than myself. 
                I like to work with amazing people around the world. New people are new experiences.
              </p>

              {/* <a className="btn btn-success btn-lg border-0 primary-btn-shadow" href="#more" role="button" >Find out more</a> */}
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Herosection;
