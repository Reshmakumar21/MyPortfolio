import "./HomeImageStyles.css";

import React from 'react'
import Homepgeimg from '../assets/homepge.jpg'
import { Link } from "react-router-dom";

const HomeImage = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="intro-img"
        src={Homepgeimg} alt ="Homepageimage"/>
        </div>
        <div className="content">
            <p>I'M AN APPLICATION DEVELOPER</p>
            <h1>
                Java Automation Developer
            </h1>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn btn-light">CONTACT</Link>
            </div>
        </div>
    </div> 
  );
};

export default HomeImage