// import React from 'react';
// import ModalImage from 'react-modal-image';
// import './Gallery.css';
// import img from './sam.webp';
// const images = [
//   img,
//   img,
//   img,
 
// ];
// function LookBook() {
//   return (
//     <div className="gallery-container">
//       {images.map((image, index) => (
//         <div key={index} className="gallery-item">
//           <ModalImage
//             small={image}
//             large={image}
//             alt={`Gallery item ${index + 1}`}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default LookBook

import React from 'react';
import ModalImage from 'react-modal-image';
import './Gallery.css';
import img from './sam.webp';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const images = [img, img, img, img, img, img];

function LookBook() {
  return (
    <>
      {/* <Header /> */}
      <div className="gallery-section">
        <h1 className="gallery-heading">Clothing Gallery</h1>
        <div className="gallery-underline"></div>
        <div className="gallery-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${index % 6 === 0 || index % 6 === 4 ? 'big' : 'small'} ${Math.floor(index / 3) % 2 === 1 ? 'reversed' : ''}`}
            >
              <ModalImage
                small={image}
                large={image}
                alt={`Gallery item ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default LookBook;
