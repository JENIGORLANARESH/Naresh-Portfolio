import React from "react";
import "./Skills.css";
import images from "../../assets/images/images";



function Skills(){
    return(
        <div>
            <div className="row justify-content-center d-flex">
                <p className="text-center text-success  mt-5">What I Offer You</p>
                <h1 className="text-center">MY Skills</h1>
                <hr className="bg-success its-hr" ></hr>
                <p className="text-center mb-sm-5">These are my skills which includes front-end, back-end and programming language. </p>


                <div align="center" className="col-lg-3 col-sm-4 col-6 my-3 animate__bounceIn wow skill-div " >
                    <img className="skill-image" src={images.java} alt="html" />
                 </div>
                <div align="center" className="col-lg-3 col-sm-4 col-6 my-3 animate__bounceIn wow skill-div " >
                    <img className="skill-image" src={images.reactimg} alt="html" />
                 </div>
                <div align="center" className="col-lg-3 col-sm-4 col-6 my-3 animate__bounceIn wow skill-div " >
                    <img className="skill-image" src={images.javascript} alt="html" />
                 </div>
                <div align="center" className="col-lg-3 col-sm-4 col-6 my-3 animate__bounceIn wow skill-div " >
                    <img className="skill-image" src={images.express} alt="html" />
                 </div>

                 <div align="center" className="col-lg-3 col-sm-4 col-6 my-3 animate__bounceIn wow skill-div " >
                    <img className="skill-image" src={images.node} alt="html" />
                 </div>
                 <div align="center" className="col-lg-3 col-sm-4 col-6 my-3 animate__bounceIn wow skill-div " >
                    <img className="skill-image" src={images.mongo} alt="html" />
                 </div>
                 <div align="center" className="col-lg-3 col-sm-4 col-6 my-3 animate__bounceIn wow skill-div " >
                    <img className="skill-image" src={images.mysql} alt="html" />
                 </div>
                <div align="center" className="col-lg-3 col-sm-4 col-6 my-3 animate__bounceIn wow skill-div " >
                    <img className="skill-image" src={images.css} alt="css" />
                 </div>

                 <div align="center" className="col-lg-3 col-sm-4 col-6 my-3 animate__bounceIn wow skill-div " >
                    <img className="skill-image" src={images.html} alt="html" />
                 </div>
                <div align="center" className="col-lg-3 col-sm-4 col-6 my-3 animate__bounceIn wow skill-div " >
                    <img className="skill-image" src={images.bootstrap} alt="css" />
                 </div>               
                <div align="center" className="col-lg-3 col-sm-4 col-6 my-3 animate__bounceIn wow skill-div " >
                    <img className="skill-image" src={images.python} alt="css" />
                 </div>               
                
            </div>
        </div>
    );
}

export default Skills;