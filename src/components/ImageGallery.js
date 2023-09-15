import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/BlogSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import car01 from '../assets/aventadorGialla.png';
import car02 from '../assets/bmw_840.png';
import car03 from '../assets/corvette2z06.png';
import car04 from '../assets/ferrariF12.png';
import car05 from '../assets/bogattiGold.png';
import car06 from '../assets/porsche918.png';



const HorizontalCarousel = () => {

  const [backofficeData, setBackofficeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/backoffice/")
      .then((data) => {
        setBackofficeData(data);
      })
      .catch((error) => {
        console.error('Error in fetching data...', error);
      });
  }, []);




  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Imposta il numero di immagini visibili contemporaneamente
    slidesToScroll: 1,
    autoplay: true, // Per attivare o disattivare l'autoplay con true-false
    autoplaySpeed: 3000, // Imposta la velocità dell'autoplay in millisecondi
  };

  return (
    <div>
      <h2 className='titleStyle'>Our models in the store. Come and try them</h2>
      <Slider {...settings}>
        <div className='p-3 ml-2 gap-2'>
          <img className='galleryStyle img-fluid' src={car01} alt="Image 1" />
        </div>
        <div className='p-3 ml-2 gap-2'>
          <img className='galleryStyle img-fluid' src={car02} alt="Image 2" />
        </div>
        <div className='p-3 ml-2 gap-3'>
          <img className='galleryStyle img-fluid' src={car03} alt="Image 3" />
        </div>
        <div className='p-3 ml-2 gap-2'>
          <img className='galleryStyle img-fluid' src={car04} alt="Image 4" />
        </div>
        <div className='p-3 ml-2 gap-2'>
          <img className='galleryStyle img-fluid' src={car05} alt="Image 5" />
        </div>
        <div className='p-3 ml-2 gap-2'>
          <img className='galleryStyle img-fluid' src={car06} alt="Image 6" />
        </div>
        {/* Aggiungi altre immagini se necessario */}
      </Slider>
      <div >
        {backofficeData.map((item) => (
          <Card key={item.id} style={{ width: '14rem', height: '31rem', cursor: 'pointer' }}>
            <Card.Img variant="top" src={item.carPicture} height={270} />
            <Card.Body>
              <Card.Title>{item.carBrand}</Card.Title>
              <Card.Title>{item.carName}</Card.Title>
              <Card.Title>€ {item.price}</Card.Title>
              <Card.Title>{item.description}</Card.Title>
              <Card.Title>{item.contact}</Card.Title>
              <div className="d-flex flex-wrap gap-1">
                <Button variant="success">Details</Button>
              </div>
            </Card.Body>
          </Card>

        ))}

      </div>
    </div>
  );
};

export default HorizontalCarousel;