import React from 'react'
import {FaFacebook} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaPaperPlane} from "react-icons/fa";
import { ImPhone} from "react-icons/im";
import "./contact.css"


const icons = {
    fontSize: "25px",
    marginRight:"15px",
    color: "#ff004f",
}

// const iconz = {
//     // textDecoration: "none",
//     // fontSize: "30px",
//     // marginRight: "15px",
//     // color: "#ababab",
//     // // display: inlineBlock,
//     // // transition: transform "0.5s",
// }
const Contact = () => {
  return (
    <div id='contact'>
        <div className="container">
            <div className="row">
                <div className="contact-left">
                    <h1 className="sub-title">Contact Me</h1>
                    <p><FaPaperPlane style={icons}/> obasanyajanet1@gmail.com </p>
                    <p><ImPhone style={icons}/> 09017435356</p>
                    <div className="social-icons">
                        <a href="#"><FaFacebook/></a>
                        <a href="#"><FaTwitterSquare/></a>
                        <a href="#"><FaInstagram/></a>
                        <a href="#"><FaLinkedin/></a>
                    </div>
                    <a href="#" className='btn btn2'>Download CV</a>
                </div> 
                <div className="contact-right">
                    <form action="#">
                        <input type="text" name="Name" id="" placeholder='Your Name' />
                        <input type="email" name="email" id="" placeholder='Your Email' />
                        <textarea name="Message" id="" rows="6" placeholder='Your Message'></textarea>
                        <button type="submit" className='btn btn2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact