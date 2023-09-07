import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Carousel.css';
import image01 from '../assets/911turbo.png';
import image02 from '../assets/astonMartinDB9.png'



const ImageGallery = () => {
  return (
    <div>
      <h2>Featured models</h2>
      <div className="thumbnail">
        <Link to="/image1">
          <img src={image01} alt="Image 1" />
        </Link>
        <Link to="/image2">
          <img src={image02} alt="Image 1" />
        </Link>
        {/* Ripetere questo schema per altre miniature */}
      </div>
    </div>
  );
};

export default ImageGallery;