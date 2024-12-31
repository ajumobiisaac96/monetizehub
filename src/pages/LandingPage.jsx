import React from 'react';
import NavBar from '../components/NavBar.jsx';
import '../styles/LandingPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import HeroBanner from '../assets/images/hero-banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <main className='landing-page'>
        <div className="hero-section">
          <div className="hero-left-side">
            <h5><span>.</span>MonetizeHub Marketing Agency</h5>
            <h1>We are available for marketing</h1>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorem quasi dicta a, suscipit minima dolorum corporis expedita eveniet repudiandae tempore quibusdam vitae voluptatum doloremque quo labore excepturi blanditiis amet.</h6>
            <Link to={"/signup"} ><button className='signup-btn'>Get Started</button></Link>
          </div>
          <div className="hero-right-side">
            <img src={HeroBanner} alt="" />
          </div>
        </div>

        <div className="services">
          <h1>Services We Provided</h1>
          <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Eveniet corporis libero ipsam facere quasi accusantium, eos ad officiis nostrum velit?</h6>

          <div className="services-card">
            <div className="cards">
              <FontAwesomeIcon 
                icon={faMessage} 
                style={{ 
                  borderRadius: '50%', 
                  fontSize: '16px', 
                  color: 'white', 
                  backgroundColor: 'darkgreen', 
                  padding: '10px', 
                  display: 'inline-block' 
                }} 
              />
              <h2>SEO Optimization</h2>
              <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel rem natus, itaque sint earum ratione!</h6>
            </div>
            <div className="cards">
              <FontAwesomeIcon 
                icon={faMessage} 
                style={{ 
                  borderRadius: '50%', 
                  fontSize: '16px', 
                  color: 'white', 
                  backgroundColor: '#6610f2', 
                  padding: '10px', 
                  display: 'inline-block' 
                }} 
              />
              <h2>Personal Branding</h2>
              <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel rem natus, itaque sint earum ratione!</h6>
            </div>
            <div className="cards">
              <FontAwesomeIcon 
                icon={faMessage} 
                style={{ 
                  borderRadius: '50%', 
                  fontSize: '16px', 
                  color: 'white', 
                  backgroundColor: '#ffb700', 
                  padding: '10px', 
                  display: 'inline-block' 
                }} 
              />
              <h2>Monetization tools</h2>
              <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel rem natus, itaque sint earum ratione!</h6>
            </div>
            <div className="cards">
              <FontAwesomeIcon 
                icon={faMessage} 
                style={{ 
                  borderRadius: '50%', 
                  fontSize: '16px', 
                  color: 'white', 
                  backgroundColor: '#fc3549', 
                  padding: '10px', 
                  display: 'inline-block' 
                }} 
              />
              <h2>Cloud Storage</h2>
              <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel rem natus, itaque sint earum ratione!</h6>
            </div>
            <div className="cards">
              <FontAwesomeIcon 
                icon={faMessage} 
                style={{ 
                  borderRadius: '50%', 
                  fontSize: '16px', 
                  color: 'white', 
                  backgroundColor: '#00d280', 
                  padding: '10px', 
                  display: 'inline-block' 
                }} 
              />
              <h2>Pay-Per-Click Advertising</h2>
              <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel rem natus, itaque sint earum ratione!</h6>
            </div>
            <div className="cards">
              <FontAwesomeIcon 
                icon={faMessage} 
                style={{ 
                  borderRadius: '50%', 
                  fontSize: '16px', 
                  color: 'white', 
                  backgroundColor: '#ff612f', 
                  padding: '10px', 
                  display: 'inline-block' 
                }} 
              />
              <h2>Analytics</h2>
              <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel rem natus, itaque sint earum ratione!</h6>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default LandingPage;