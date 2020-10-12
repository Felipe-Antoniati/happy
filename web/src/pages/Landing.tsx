import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../assets/images/logo.svg';

import '../styles/pages/landing.css'; 

const Landing = () => {
  return(
    <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoImg} alt="Happy"/>
      <main>
        <h1>Being happy is<br/>to bring happiness to the world</h1>
        <p>Visit orphanages and change many children's day.</p>
      </main>
      <div className="location">
          <strong>Philip</strong> 
          <span>South Dakota</span> 
      </div>
      <Link to="/app" className="enter-app">
        <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />  
      </Link>
    </div>
  </div>
  );
};

export default Landing;