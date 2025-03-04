import React from 'react'
import "./App.css"

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import AboutMe from './components/About/AboutMe'
import Timeline from './components/Timeline/Timeline'
import Certificates from './components/Certificates/Certificates'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <AboutMe/>
      <Experience />
      <Certificates/>
      <Timeline/>
      <Contact/>
      <Footer />

    </div>
  )
}

export default App

