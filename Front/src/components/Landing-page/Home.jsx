import React from 'react'
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import './Home.css'

function Home() {
  return (
    <div className='hello'>
            <Header/>
             <Hero />
              <About />
              <Contact />
              <Footer />
    </div>
  )
}

export default Home