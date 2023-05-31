import React from 'react'
import "./footer.css"
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <footer>
            <p>
              <span>&copy; ThatITBabe <i>&reg;</i></span>
              <a href="https://github.com/ThatITBabe" className='git'><FaGithub/></a>
            </p>
        </footer>
    </div>
  )
}

export default Footer