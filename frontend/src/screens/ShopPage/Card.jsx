import React from 'react';
import './Card.css';
import './Card2.css';

function Card() {
    return (
        <div className="product-card">
            <img
                src="./image1.webp"
                alt="Product"
                className="product-image"
            />
            <div className="caption">
                Floating Shirt
            </div>
        </div>
    );
}

function Card2() {
    return (
        <div className="card-container">
            <Card />
            <Card />
        </div>
    );
}

export default Card2;
