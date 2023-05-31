import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Feedbacks from './components/Feedbacks';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import StarsCanvas from './components/StarsCanvas';
import Tech from './components/Tech';
import Works from './components/Works';
import { BrowserRouter as Router } from 'react-router-dom'



function App() {
  return (
    <div>
      <Router>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks/>
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App;