import React from 'react'
import HeroOnLog from './HeroOnLog/Hero';
import HeaderOnLog from './HeaderOnLog/Header';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import './Home.css';
function ResumeBuilder() {
  return (
    <div className='hello'>

            <HeaderOnLog/>
             <HeroOnLog />
              <About />
              <Contact />
              <Footer />
    </div>
  )
}

export default ResumeBuilder