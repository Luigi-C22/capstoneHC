import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { carouselItems } from '../data/carouselItems';
import { nanoid} from 'nanoid';
import '../styles/Carousel.css';

const Welcome = () => {

        return (

            <Carousel className='mb-3 mx-auto mt-5' style={{width: '80%'}} >
                {carouselItems.map((item) => {
                    return (
                        <Carousel.Item   key={nanoid()}>
                            <img className='d-block w-100  carousel-image'  src={item.src} alt={item.alt} />
                            <Carousel.Caption>
                                <h3 className='carouselTitles light-text'>{item.captionTitle}</h3>
                                <p className='smallTitle light-text'>{item.captionDescription}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        );
    
};

export default Welcome;