import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
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
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const carsData = async () => {
      try {
        const response = await fetch('http://localhost:5050/backoffice/');
        if (!response.ok) {
          throw new Error('Error in request');
        }
        const data = await response.json();
        setCardData(data);
        setIsLoading(false);

      } catch (error) {
        console.error('Bad request error', error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    carsData();
  }, []);

  if (isLoading) {
    return <div>Caricamento in corso...
      <Spinner className='spinStyle'
      animation="border" variant="danger" role="status">
      </Spinner>
      </div>
  }

  if (isError) {
    return <div>Si è verificato un errore durante il recupero dei dati.</div>;
  }


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
          <img className='galleryStyle img-fluid' src={car01} alt="CarPhoto 1" />
        </div>
        <div className='p-3 ml-2 gap-2'>
          <img className='galleryStyle img-fluid' src={car02} alt="CarPhoto 2" />
        </div>
        <div className='p-3 ml-2 gap-3'>
          <img className='galleryStyle img-fluid' src={car03} alt="CarPhoto 3" />
        </div>
        <div className='p-3 ml-2 gap-2'>
          <img className='galleryStyle img-fluid' src={car04} alt="CarPhoto 4" />
        </div>
        <div className='p-3 ml-2 gap-2'>
          <img className='galleryStyle img-fluid' src={car05} alt="CarPhoto 5" />
        </div>
        <div className='p-3 ml-2 gap-2'>
          <img className='galleryStyle img-fluid' src={car06} alt="CarPhoto 6" />
        </div>
        {/* Aggiungi altre immagini qui*/}
      </Slider>
      {/* <Slider {...settings}> */}

      {/*  {cardData.map((card, index) => (
          <div key={index} className="p-3 ml-2 gap-2">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{card.carBrand}</Card.Title>
                <Card.Title>{card.carName}</Card.Title>
                <Card.Title>€ {card.price}</Card.Title>
                <Card.Text>Contact: {card.contact}</Card.Text>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="success">Details</Button>
              </Card.Body>
            </Card> 
          </div>
        ))} */}
      {/* </Slider> */}



    </div>


  );
};



export default HorizontalCarousel;