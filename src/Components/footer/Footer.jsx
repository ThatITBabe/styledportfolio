import React from 'react'
import "./footer.css"
import { FaGithub } from "react-icons/fa";
// import ScrollToTop from '../scrollToTop/ScrollToTop';

const Footer = () => {
  return (
    <div className='footer'>
      <footer>
        <p>
          <span>&copy; ThatITBabe <i>&reg;</i>, 2023</span>
          <a href="https://github.com/ThatITBabe" className='git'><FaGithub /></a>
          {/* <ScrollToTop /> */}
        </p>
      </footer>
    </div>
  )
}

export default Footer