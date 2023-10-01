import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import ImageDetail from './ImageDetail';
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
import car07 from '../assets/RR_ghost.png';
import car08 from '../assets/SSC-tuatara.png';
import car09 from '../assets/trionNemesis03.png';
import car10 from '../assets/astonMartinDB9.png';
import car11 from '../assets/lotusEvija.png';
import car12 from '../assets/gallardo02.png';
import car13 from '../assets/gallardo01.png';
import car14 from '../assets/Ferrari-458Spider.png';
import car15 from '../assets/Lamborghini-Urus.png';
import car16 from '../assets/audiR8.png';



const HorizontalCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };
 

    useEffect(() => {
      const carsData = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}backoffice`);
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
      return (
      <div>
        Wait, loading cars...
        <Spinner className='spinStyle'
          animation="border" variant="danger" role="status">
        </Spinner>
      </div>
      );
    };

    if (isError) {
      return <div>Si è verificato un errore durante il recupero dei dati.</div>;
    };


    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Imposta il numero di immagini visibili contemporaneamente
      slidesToScroll: 1,
      autoplay: true, // attiva o disattiva l'autoplay con true-false
      autoplaySpeed: 3000, // Imposta la velocità dell'autoplay in millisecondi
    };

    return (
      
      <div>
        <div>
          <h2 className='titleStyle'>Our models in the store. Come and try them</h2>
          <Slider {...settings}>
            <div className='p-3 ml-2 gap-2'>
            <Link to="/imagedetail" onClick={() => handleImageClick(car01)}>
                <img className='galleryStyle img-fluid' src={car01} alt="CarPhoto 1" />
                </Link>
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
            <div className='p-3 ml-2 gap-2'>
              <img className='galleryStyle img-fluid' src={car07} alt="CarPhoto 7" />
            </div>
            <div className='p-3 ml-2 gap-2'>
              <img className='galleryStyle img-fluid' src={car08} alt="CarPhoto 8" />
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
        <div className='mt-1'>

          <Slider {...settings}>
            <div className='p-3 ml-2 gap-2'>
              <img className='galleryStyle img-fluid' src={car09} alt="CarPhoto 9" />
            </div>
            <div className='p-3 ml-2 gap-2'>
              <img className='galleryStyle img-fluid' src={car10} alt="CarPhoto 10" />
            </div>
            <div className='p-3 ml-2 gap-3'>
              <img className='galleryStyle img-fluid' src={car11} alt="CarPhoto 11" />
            </div>
            <div className='p-3 ml-2 gap-2'>
              <img className='galleryStyle img-fluid' src={car12} alt="CarPhoto 12" />
            </div>
            <div className='p-3 ml-2 gap-2'>
              <img className='galleryStyle img-fluid' src={car13} alt="CarPhoto 13" />
            </div>
            <div className='p-3 ml-2 gap-2'>
              <img className='galleryStyle img-fluid' src={car14} alt="CarPhoto 14" />
            </div>
            <div className='p-3 ml-2 gap-2'>
              <img className='galleryStyle img-fluid' src={car15} alt="CarPhoto 15" />
            </div>
            <div className='p-3 ml-2 gap-2'>
              <img className='galleryStyle img-fluid' src={car16} alt="CarPhoto 16" />
            </div>
            {/* Aggiungi altre immagini qui*/}
          </Slider>


        </div>
       
      </div>

    );
  
      };


export default HorizontalCarousel;