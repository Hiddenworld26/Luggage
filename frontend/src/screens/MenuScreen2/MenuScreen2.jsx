import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MenuScreen2.css';
import image from './trial.webp';
import CloseIcon from '@mui/icons-material/Close';
import CommonMenuShopScreen from '../CommonMenuShopScreen/CommonMenuShopScreen';

function MenuScreen2() {
  const navigate = useNavigate();

  return (
    <>
      {/* <CloseIcon className="close-icon" onClick={() => navigate(-1)} />  */}

      <div className="menuscreen">
        <div className="menu-boxes">
          {/* <CommonMenuShopScreen /> */}
          <ul className="menu-list">
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
          <img src={image} alt="Menu Visual" height={600} />
        </div>
      </div>
    </>
  );
}

export default MenuScreen2;
