import React from 'react';
import img from './image2.jpeg';
import './HomeScreen.css';
import Homepagecard from '../../Components/Homepagecard/Homepagecard';


function HomeScreen() {
  return (
    <>
    <div className="Home-Screen">
      <div className='image-container'>
      <img  src={img} alt="main-image" width={1500} height={600}/>
      </div>
      <h1 className='tag-line'>
        Bringing Comfort to your closet 
      </h1>
      <Homepagecard />
      <Homepagecard />
      <Homepagecard />
      
    </div>
  
    </>
  );
}

export default HomeScreen;

 {/* <div className="left-container">
          {/* <img className="home-img" src={img} alt="Left" /> */}
          // </div>
          // <div className="right-container">
            {/* <img className="home-img" src={img} alt="Right" /> */}
          // {/* </div> */}
          // } */