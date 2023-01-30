import React from 'react';
import logo from './img/beecareful4.png'

import './App.css'

function App() {
  return (
      <div className="header">
        <div id="logo-wrapper">
          <img src={logo}/>
          <h1 id="logo-text">Your hive management solutions</h1>
        </div>
        <ul className='nav-bar'>
          <li>Home</li>
          <li>Hives</li>
          <li>Weather</li>
          <li>Contact Us</li>
        </ul>
      </div>
  );
}

export default App;
