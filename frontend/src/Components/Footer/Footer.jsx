import React from 'react';
import './Footer.css';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://example.com/message" target="_blank" rel="noopener noreferrer">
            <MessageOutlinedIcon style={{ color: 'black' }} />
          </a>
          <a href="https://example.com/camera" target="_blank" rel="noopener noreferrer">
            <CameraAltOutlinedIcon style={{ color: 'black' }} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookOutlinedIcon style={{ color: 'black' }} />
          </a>
        </div>
        <div className="footer-links">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/contact">CONTACT</a>
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/confirm">Confirm Entrepreneur Information</a>
        </div>
        <div className="company-info">
          <p>
            Company Name: FIXTURE FABRICATION Owner: Kim Kyoungo Personal Info Manager: Hong Seokjin Phone Number: 070-7543-7671 | Email: contact@merelymade.com
          </p>
          <p>
            Address: 3rd Floor, Hongikhoe Building, 29-28, Hangang-daero 21-gil, Yongsan-gu, Seoul, Republic of Korea Business Registration Number: 206-86-92290 | Business License: 2015-Seoulseongdong-0891
          </p>
          <p>Hosting by sixshop</p>
        </div>
        <h1 className='Footer-desc'>THE LAZY LUGGAGE</h1>
      </div>
    </footer>
  );
}

export default Footer;




// import React from 'react'

// function Footer() {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer