// import React from 'react'
// import { Link } from 'react-router-dom';
// import './MenuScreen.css';

// function MenuScreen() {
//   return (
//     <div className="menuscreen">
//     {/* <li>
//       <Link to="/">Lazy Luggage</Link>
//     </li> */}

//     <div className="menu-boxes">
//     <li>
//       <Link to="/">Lazy Luggage</Link>
//     </li>

//     <li>
//       <Link to="/mens">Mens</Link>
//     </li>

//     <li>
//       <Link to="/womens">Womens</Link>
//     </li>
    
//     <li>
//       <Link to="/footwear">Footwear</Link>
//     </li>

//     <li>
//       <Link to="/Accessories">Accessories</Link>
//     </li>

    
//     </div>
//     <div className="menu-boxes"></div>
//     </div>
//   )
// }

// export default MenuScreen;

import React from 'react';
import { Link } from 'react-router-dom';
import './MenuScreen.css';
import image from './trial.webp'



function MenuScreen() {
  return (
    <div className="menuscreen">
      <div className="menu-boxes">
        <ul className="menu-list">
          <li>
            <Link to="/">OUR LEGACY</Link>
          </li>
          <li>
            <Link to="/mens">MENS</Link>
          </li>
          <li>
            <Link to="/womens">WOMENS</Link>
          </li>
          <li>
            <Link to="/footwear">FOOTWEAR</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/sale">SALE</Link>
          </li>
        </ul>
        <div className="footer-links">
          <ul>
            <li><Link to="/shipping-return">Shipping & Return</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/runways">Runways</Link></li>
            <li><Link to="/info">Info</Link></li>
          </ul>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/stores">Stores</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
      </div>
      <div className="menu-image">
        <img src={image} alt="Menu Visual" height={500}/>
      </div>
    </div>
  );
}

export default MenuScreen;

