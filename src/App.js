import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Services from './Components/services/Services'
import Portfolio from './Components/portfolio/Portfolio'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Skills from './Components/skills/Skills'



const App = () => {
  return (
    <div style={{backgroundColor: "#080800", color: "#fff"}}>
      <Navbar/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App