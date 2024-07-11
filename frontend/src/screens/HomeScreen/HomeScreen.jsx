// HomeScreen.jsx

import React from 'react';
import img from './image.avif';
import './HomeScreen.css';
import Homepagecard from '../../Components/Homepagecard/Homepagecard';
import Footer from '../../Components/Footer/Footer';

function HomeScreen() {
  return (
    <>
    <div className="Home-Screen">
      <div className='image-container'>
        <div className="left-container">
          {/* <img className="home-img" src={img} alt="Left" /> */}
        </div>
        <div className="right-container">
          {/* <img className="home-img" src={img} alt="Right" /> */}
        </div>
      </div>
      <h1 className='tag-line'>
        Bringing Comfort to your closet 
      </h1>
      <Homepagecard />
      <Homepagecard />
      <Homepagecard />
      {/* <Footer/> */}
    </div>
  
    </>
  );
}

export default HomeScreen;

