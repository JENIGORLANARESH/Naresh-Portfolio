import React from "react";
import "./Projects.css";
import livenews from "../../assets/livenews.png";
import weather360 from "../../assets/weather360.png";

function Projects(){
    return(
            <div id="Projects" className="projects">
                <div className="row justify-content-center d-flex">
                <p className="text-center text-success mt-5">Some Samples From My Recent Project</p>
                <h1 className="text-center">MY Projects</h1>
                <hr className="bg-success hr-break" ></hr>
                <p className="text-center mb-sm-5">Here are few of my projects.</p>

                <div className="marquee mb-5 d-flex flex-column flex-sm-row justify-content-evenly ">
                    <div className="project-1 col-sm-5 order-sm-1 Shadow ">
                            <h3>LiveNews</h3>
                            <p>This application provides users with real-time news updates from various sources.</p>
                            <a href="https://livenews-9hvr.onrender.com/TopNews" target="_blank" rel="noopener noreferrer"><img src={livenews} alt="livenews"/></a>
                            
                    </div>
                    <div className="project-2 col-sm-5 order-sm-2 Shadow">
                            <h3>Weather360</h3>
                            <p>Weather360 is a weather forecast application built using Node.js, Express.js, EJS, CSS, Bootsrap and a weather API.</p>
                            <a href="https://weather360-z7gj.onrender.com/vijayawada" target="_blank" rel="noopener noreferrer"> <img src={weather360} alt="weather360"/></a>
                            
                    </div>
                </div>

                </div>
            </div>
    );
}

export default Projects;