import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHeart } from 'react-icons/fa';
import '../styles/Singlecard.css';

const SingleCard = ({
    carBrand, carName, carPicture, year, price, contact, description
}) => {

    const [like, setLike] = useState(false); //stato del cuore premendo il tasto like
    const handleLikeClick = () => {
        setLike(!like); //controlla se il tasto è like oppure no
    };

    const [disappear, setDisappear] = useState(false);

    const handleNotLikeClick = () => {
        setDisappear(true);
        // quando si preme "Not Like" la card sparisce con effetto
    };

    return (
        <Card className={`mx-auto p-3
        ${disappear ? 'disappear' : ''} /* fa sparire la card */
        ${like ? 'liked' : ''} /* aggiunge il cuore alla card */
        cardWithShadow`}
            style={{ width: '18rem', height: '32rem', overflow: 'hidden', marginLeft: '1rem', marginRight: '1rem' }}>
            <Card.Img variant="top" src={carPicture} alt={`${carBrand} ${carName}`} />
            <Card.Body style={{ maxHeight: '25rem', overflow: 'hidden' }}>
                <Card.Title className='cardTitle' >{carBrand} {carName}</Card.Title>
                <Card.Text>
                    <span className='refText'> Year: </span> <span className='detailText'> {year}</span><br />
                    <span className='refText'> Price: € </span><span className='detailText'>{price}</span><br />
                    <span className='refText'> Contact:</span><br></br><span className='detailText'>{contact}</span><br />
                    <span className='refText'> Description:</span><br></br><span className='detailText'>{description}</span>
                </Card.Text>
            </Card.Body>
            
            <Button variant="outline-success" onclick={handleLikeClick}>Like</Button>
            <Button variant="outline-danger" onClick={handleNotLikeClick}>Not Like</Button>
            {like && <FaHeart className="heartIcon" />}
        </Card>
    );
}

export default SingleCard;
