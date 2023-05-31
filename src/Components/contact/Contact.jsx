import React from 'react'
import {FaFacebook} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import { ImPhone} from "react-icons/im";
import { BsMessenger} from "react-icons/bs";
import { RiWhatsappFill} from "react-icons/ri";
import "./contact.css"
import cv from '../../asset/New CV.pdf'


const Contact = () => {
  return (
    <div id='contact'>
        <div className="container">
            <div className="row">
                <div className="contact-left">
                    <h1 className="sub-title">Contact Me</h1>
                    <div className="social-icons">
                        <a href="mailto:obasanyajanet1@gmail.com" target='_blank' rel="noopener noreferrer"><AiOutlineMail/></a>
                        <a href='tel: +2349017435356' creates the call link><ImPhone/></a>
                        <a href='https://m.me/obasanya.anuoluwapo'><BsMessenger/></a>
                        <a href="https://api.whatsapp.com/send?phone+2349017435356" target='_blank' rel="noopener noreferrer"><RiWhatsappFill/> </a>
                        <a href="https://www.facebook.com/obasanya.anuoluwapo/" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                        <a href="https://twitter.com/obasanyaanu1" target="_blank" rel="noopener noreferrer"><FaTwitterSquare/></a>
                        <a href="https://www.instagram.com/anu_oba/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                        <a href="https://www.linkedin.com/in/obasanyaanuoluwapojanet/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                    </div>
                    <a href={cv} download className='btn btn2'>Download CV</a>
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