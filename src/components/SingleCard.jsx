import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleCard = ({
    carBrand, carName, carPicture, year, price, contact, description
}) => {


    return (
        <Card style={{ width: '12rem', height: '30rem', overflow: 'hidden' }}>
            <Card.Img variant="top" src={carPicture} alt={`${carBrand} ${carName}`} />
            <Card.Body style={{ maxHeight: '25rem', overflow: 'hidden' }}>
                <Card.Title>{carBrand} {carName}</Card.Title>
                <Card.Text>
                    Year: {year}<br />
                    Price: € {price}<br />
                    Contact: {contact}<br />
                    Description: {description}
                </Card.Text>
            </Card.Body>
            <Button variant="outline-success">Like</Button>
            <Button variant="outline-danger">Not Like</Button>
        </Card>
    );
}

export default SingleCard;
