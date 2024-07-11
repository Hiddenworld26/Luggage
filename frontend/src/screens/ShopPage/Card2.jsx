import React, { useState } from 'react';
import './Card.css';
import './Card2.css';

import image1 from './image1.webp';
import image2 from './image2.webp';

function Card() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="product-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={isHovered ? `${image1}` :  `${image2}` }
                alt="Product"
                className="product-image"
            />
            <div className="caption">
                {isHovered ? 'It supports Floating Tencel' : 'Floating Shirt'}
            </div>
        </div>
    );
}

function Card2() {
    return (
        <div className="card-container">
            {/* <div className="card-wrapper">
                <Card />
            </div>
            <div className="card-wrapper">
                <Card />
            </div> */}

            <Card/>
            <Card/>
        </div>
    );
}

export default Card2;
