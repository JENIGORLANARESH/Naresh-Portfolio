import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Certification.css";

import javaBasics from "./../../assets/certificates/javaBasics.png";
import advancedReact from "./../../assets/certificates/Advanced_React.png";
import bharatIntern from "./../../assets/certificates/Bharat_Intern.png";
import design from "./../../assets/certificates/design.png";
import sqlGreat from "./../../assets/certificates/sqlGreat.png";
import BootcampUdemy from "./../../assets/certificates/BootcampUdemy.png";
import analyticsGoogle from "./../../assets/certificates/analyticsGoogle.png";
import basicsreact from "./../../assets/certificates/basicsreact.png";

const Certification = () => {
  // Slick settings for autoplay
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500, // Set the speed of carousel transition (1 second = 1000 milliseconds)
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // This will apply settings when the device width is less than 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="certification-carousel">
      <Slider {...settings}>
        <div className="image">
          <img src={BootcampUdemy} alt="Slide 1" />
        </div>
        <div className="image">
          <img src={basicsreact} alt="Slide 2" />
        </div>
        <div className="image">
          <img src={analyticsGoogle} alt="Slide 2" />
        </div>

        <div className="image">
          <img src={javaBasics} alt="Slide 1" />
        </div>
        <div className="image">
          <img src={sqlGreat} alt="Slide 2" />
        </div>
        <div className="image">
          <img src={design} alt="Slide 2" />
        </div>

        <div className="image">
          <img src={advancedReact} alt="Slide 2" />
        </div>
        <div className="image">
          <img src={bharatIntern} alt="Slide 2" />
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Certification;
