import React from 'react'
import "./services.css"
import { FaCode } from "react-icons/fa";
import { FaCropAlt } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";

const style = {
    fontSize: "50px",
    marginBottom:"25px"
}

const Services = () => {
  return (
    <div id='services'>
          <div className="container">
            <h1 className="sub-title">My Services</h1>
            <div className="services-list">
                <div>
                    <FaCode style={style}/>
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nostrum commodi laudantium tenetur, at corporis rem.</p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <FaCropAlt style={style}/>
                    <h2>UI/UX</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nostrum commodi laudantium tenetur, at corporis rem.</p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <FaAppStore style={style}/>
                    <h2>App Development</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nostrum commodi laudantium tenetur, at corporis rem.</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Services