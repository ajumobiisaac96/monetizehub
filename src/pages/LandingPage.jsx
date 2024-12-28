import React from 'react'
import NavBar from '../components/NavBar.jsx'
import '../styles/LandingPage.css'
import HeroBanner from '../assets/images/hero-banner.png'

const LandingPage = () => {
  return (
    <div>
      <NavBar/>
      <main>
        <div className="hero-section">
        <div className="hero-left-side">
        <h5>MonetizeHub Marketing Agency</h5>
        <h1>We are available for marketing
        </h1>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorem quasi dicta a, suscipit minima dolorum corporis expedita eveniet repudiandae tempore quibusdam vitae voluptatum doloremque quo labore excepturi blanditiis amet.</h6>
        <button className='signup-btn'>Get Started</button>
      </div>
      <div className="hero-right-side">
        <img src={HeroBanner} alt="" />
      </div>
        </div>
      
      </main>
    </div>
  )
}

export default LandingPage
