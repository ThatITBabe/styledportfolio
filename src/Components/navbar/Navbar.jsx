// import React from 'react'
// import "./navbar.css"

// const Navbar = () => {
//     let imageDesign = {
//         backgroundImage: 'url("pic1.png")',
//         height: "50rem",
//         backgroundRepeat: "no-repeat"
//     }
//   return (
//     <div>
//         {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">ThatITBabe</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#about">About</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#services">Services</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#portfolio">Porfolio</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#contact">Contact</a>
//       </li>
//     </ul>
//   </div>
//         </nav> */}

//         <div className="navbar">
//             <div className="nav-logo">
//                 <a href="#">ThatITBabe</a>
//             </div>
//             <div className="nav-menu">
//                 <ul className='nav-menu-link'>
//                     <li><a href="#home">Home</a></li>
//                     <li><a href="#about">About</a></li>
//                     <li><a href="#services">Services</a></li>
//                     <li><a href="#portfolio">Portfolio</a></li>
//                     <li><a href="#contact">Contact</a></li>
//                 </ul>
//             </div>
//         </div>
//         <div className="home" style={imageDesign}>

//         </div>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import "./navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import {FaTimes} from "react-icons/fa"

const Navbar = () => {

    const openMenu = () => {
        const sidemenu = document.getElementById("sidemenu");
        sidemenu.style.right = "0";
      };
    
      const closeMenu = () => {
        const sidemenu = document.getElementById("sidemenu");
        sidemenu.style.right = "-200px";
      };
    
    
  return (
    <div>
        <div id="header" >
            <div class="container">
                <nav>
                    <h1 className='logo' style={{width: "140px"}}>That<span>ITBabe.</span></h1>
                    <ul id='sidemenu'>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <FaTimes className='res-nav men2' onClick={closeMenu}/>
                    </ul>
                    <GiHamburgerMenu className='res-nav men' onClick={openMenu}/>
                </nav>
                <div class="header-text" id='home'>
                    <p>SOFTWARE DEVELOPER</p>
                    <h1>Hi, I'm OBASANYA <br /> <span>Anuoluwapo</span> from Nigeria</h1>
                </div>
            </div>
        </div>
        
        <div id="about">
            <div class="container">
                <div class="row">
                    <div class="about-col-1">
                        <img src="pic8.JPG" alt=""/>
                    </div>
                    <div class="about-col-2">
                        <h1 class="sub-title">About Me</h1>
                        <p>Hi, I’m OBASANYA Anuoluwapo Janet. I’m a Software Developer. I delved into this niche because I have a strong passion for creating solutions to problems and making online experiences easy for users.
                        During my learning, I sharpened my teamwork skill, communication skill, and my critical thinking abilities.
                        I'm open to all forms of collaboration which include working on projects with teams and also intense training.
                        </p>
                        <ul className='japa'>
                            <li className='kinsley'>
                                <p class="tab-links active-link">Experience</p>
                                <div className="tab-contents active-tab" id='experience'>
                                    <ul className='menumie'>
                                        <li><span>2023 - Present</span><br />Full-stack Web development at GoMyCode</li>
                                        <li><span>2019 - 2021</span><br />Junior Web developer, Flutterwave</li>
                                        <li><span>2017 - 2019</span><br />Design executive at Paystack</li>
                                        <li><span>2016 - 2017</span><br />Intenship at Amazon Video</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='kinsley'>
                                <p class="tab-links active-link">Education</p>
                                <div className="tab-contents active-tab" id='education'>
                                    <ul className='menumie'>
                                        <li><span>2023</span><br />GoMyCode<br/>Full Stack Web Development</li>
                                        <li><span>2021</span><br />Obafemi Awolowo University<br />BSc. from OAU</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar