import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Singlecard.css';

const SingleCard = ({
    carBrand, carName, carPicture, year, price, contact, description
}) => {


    return (
        <Card style={{ width: '12rem', height: '30rem', overflow: 'hidden' }}>
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
            <Button variant="outline-success">Like</Button>
            <Button variant="outline-danger">Not Like</Button>
        </Card>
    );
}

export default SingleCard;
