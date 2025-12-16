import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Project from './components/Project/Project'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import './App.css'


function App() {


  return (
    <div className="bg-[#050414]">
      <div class="relative min-h-screen w-full bg-gradient-to-br from-[#0f172a]/90 via-[#1e293b]/80 to-[#3b0764]/90 backdrop-blur-2xl">

        <Navbar />
        <div className="relative pt-10">
          <About />
          <Skills />
          <Experience />
          <Project />
          <Education />
          <Contact />
          <Footer />

        </div>
      </div>
    </div>
  )
}

export default App
