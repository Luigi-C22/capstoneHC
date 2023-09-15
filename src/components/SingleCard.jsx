import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleCard = (props) => {
    const { carBrand, carName, carPicture, year, price, contact, description } = props;


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={carPicture} alt={`${carBrand} ${carName}`} />
            <Card.Body>
                <Card.Title>{carBrand} {carName}</Card.Title>
                <Card.Text>
                    Year: {year}<br />
                    Price: {price}<br />
                    Contact: {contact}<br />
                    Description: {description}
                </Card.Text>
                <Button variant="primary">Go</Button>
            </Card.Body>
        </Card>
    );
}

export default SingleCard;
