import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from './image.png'; 
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate(); 

  const handleMenuToggle = () => {
    navigate("/menu");
  };

  return (
    <nav className={`Header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-left">
        <MenuSharpIcon
          className="menu-toggle"
          style={{ color: scrolled ? 'black' : 'white' }}
          onClick={handleMenuToggle}
        />
      </div>
      <div className="navbar-right">
        <SearchSharpIcon className="right-icons" style={{ color: scrolled ? 'black' : 'white' }} />
        <AccountCircleRoundedIcon className="right-icons" style={{ color: scrolled ? 'black' : 'white' }} />
        <ShoppingCartRoundedIcon className="right-icons" style={{ color: scrolled ? 'black' : 'white' }} />
      </div>
    </nav>
  );
};

export default Header;
