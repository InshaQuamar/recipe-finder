// HomePage.js
import React from 'react';
import './HomePage.css';
import { useNavigate } from "react-router-dom";
import LinkedInLogo from '../../assets/images/LinkedInLogo.png';
import initials from '../../assets/images/initials.png';



const HomePage = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/search`; 
    navigate(path);
  }

  return (
    <div className="container">
      <div className="content-main">
        <h1 className="title">👨‍🍳 Recipe Finder 🍴</h1>
        <p className="description">Easily discover recipes by simply entering your available ingredients.</p>
        <button className="ctaButton" onClick={routeChange}>Try it Out</button>
      </div>
      <footer className="footer-main">
        <div className="social-links">
          <a href="www.linkedin.com/in/insha-quamar-419895258" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInLogo} alt="LinkedIn" />
          </a>
          <a href="https://github.com/InshaQuamar/" target="_blank" rel="noopener noreferrer">
            <img src={initials} alt="Portfolio" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

