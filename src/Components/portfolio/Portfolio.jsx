import React from 'react'
import "./portfolio.css"
import {FaExternalLinkAlt} from "react-icons/fa";

const Portfolio = () => {
  return (
    <div id='portfolio'>
        <div className="container">
            <h1 className="sub-title">My Work</h1>
            <div className="work-list">
                <div className="work">
                    <img src="phone5T.webp" alt="" />
                    <div className="layer">
                        <h3>Trading App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maiores itaque iure adipisci. Voluptatum, exercitationem unde?</p>
                        <a href="#"><FaExternalLinkAlt/></a>
                    </div>
                </div>
                <div className="work">
                    <img src="phone4M.jpeg" alt="" />
                    <div className="layer">
                        <h3>Music App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maiores itaque iure adipisci. Voluptatum, exercitationem unde?</p>
                        <a href="#"><FaExternalLinkAlt/></a>
                    </div>
                </div>
                <div className="work">
                    <img src="phone2E.webp" alt="" />
                    <div className="layer">
                        <h3>Online Shopping App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maiores itaque iure adipisci. Voluptatum, exercitationem unde?</p>
                        <a href="#"><FaExternalLinkAlt/></a>
                    </div>
                </div>
            </div>
            <a href="#" className='btn'>See more</a>
        </div>
    </div>
  )
}

export default Portfolio