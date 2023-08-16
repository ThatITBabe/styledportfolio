import React from 'react'
import "./portfolio.css"
import {FaExternalLinkAlt} from "react-icons/fa";
import glovo from "../../asset/glovow.jpg"
import calc from "../../asset/calculator.png"
import todo from "../../asset/tod.webp"


const Portfolio = () => {
  return (
    <div id='portfolio'>
        <div className="container">
            <h1 className="sub-title">My Work</h1>
            <div className="work-list">
                <div className="work">
                    <img src={calc} alt="" />
                    <div className="layer">
                        <h3>A Calculator</h3>
                        <p>An app for basic arithmetic mathematics</p>
                        <a href="https://calculator-lac-theta.vercel.app/"><FaExternalLinkAlt/></a>
                    </div>
                </div>
                <div className="work">
                    <img src={todo} alt="" />
                    <div className="layer">
                        <h3>To-Do-List App</h3>
                        <p>A to-do list is just a list of things you have to-do.</p>
                        <a href="https://todolist-blue-six.vercel.app/"><FaExternalLinkAlt/></a>
                    </div>
                </div>
                <div className="work">
                    <img src={glovo} alt="" />
                    <div className="layer">
                        <h3>Glovo App Clone</h3>
                        <p>Glovo specializes in last-mile logistics, primarily connecting users with businesses, and couriers, offering on-demand services from local restaurants, grocers and supermarkets, and high street retail stores via its mobile app.</p>
                        <a href="https://glovo-clone-with-react.vercel.app/"><FaExternalLinkAlt/></a>
                    </div>
                </div>
            </div>
            <a href="https://github.com/ThatITBabe" className='btn'>See more</a>
        </div>
    </div>
  )
}

export default Portfolio