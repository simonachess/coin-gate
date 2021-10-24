import React, { useState } from 'react';
import './App.css';
import CurrencyForm from './CurrencyForm.js';
import logo from './Rectangle.jpg';

function App() {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  }

  return (
    <div className="App">
      <nav id="navbar">
        <div id="menu-options" className={`menu-options menu-left ${isActive ? "" : "change"}`}>
          <img src={logo} alt="logo" />
          <a href='#products'>Products</a>
          <a href='#resources' >Resources</a>
          <a href='#menu' >Buy Instantly</a>
        </div>
        <div id="menu-options" className="menu-options">
          <a href='#login'>Log In</a>
          <span id="signup">
            <a href='#signup'  >Sign up</a></span>
        </div>

        <div id="hamburger" className={`menu-container ${isActive ? "" : "change"}`} onClick={handleToggle}>
          <div className="bar1" id="bar1"></div>
          <div className="bar2" ></div>
          <div className="bar3" ></div>
        </div>
      </nav>

      <div className="main-container">
        <div className="text-form-container">
          <div className="text-container">
            <h1>
              <span className="green-word">Buy Bitcoin, </span>Ethereum,
              Litecoin and other
              crypto <span className="green-word">online</span>
            </h1>
            <div className="form-container">
              <CurrencyForm />
            </div>
            <div className="info-text">
              <p>
                Why bother going through complicated exchanges? Buy cryptocurrency with top payment methods like SEPA bank transfer, Credit and Debit Card, Apple Pay, Mobile balance or Klarna.  You can buy Bitcoin, Ethereum or any other popular crypto directly to your personal wallet without making any initial deposits. It's as easy as it gets!
              </p>
              <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                <span className="green-word">Start now &gt; </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
