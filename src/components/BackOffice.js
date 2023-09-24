import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from 'react-bootstrap';
import '../styles/Backoffice.css'

const addVehicle =[];

const CarForm = () => {
  const [formData, setFormData] = useState({
    carBrand: "",
    carName: "",
    carPicture: "",
    price: 0,
    contact: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addVehicle(formData); // Invia i dati al backend
      alert("Veicolo aggiunto con successo!"); // Notifica di successo
    } catch (error) {
      console.error("Errore nell'aggiunta del veicolo:", error);
      alert("Si è verificato un errore. Riprova più tardi."); // Notifica di errore
    }
  };

  return (
  <Container className="formBackOffice" >
  <Form className="formBackOffice" onSubmit={handleSubmit}>
    <Row>
    <Col md={6}>
      <Form.Group controlId="carBrand">
        <Form.Label>Brand</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter car brand"
          name="carBrand"
          value={formData.carBrand}
          onChange={handleInputChange}
        />
      </Form.Group>
      </Col>
      
    <Col md={6}>
      <Form.Group controlId="carName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter car name"
          name="carName"
          value={formData.carName}
          onChange={handleInputChange}
        />
      </Form.Group>
      </Col>
      </Row>
      <Row>
    <Col md={6}>
      <Form.Group controlId="carPicture">
        <Form.Label>Picture</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a photo of car"
          name="carPicture"
          value={formData.carPicture}
          onChange={handleInputChange}
        />
      </Form.Group>
      </Col>
    <Col md={6}>
      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
      </Form.Group>
      </Col>
      </Row>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
        as = "textarea"
        rows = {5}
          placeholder="Enter a  short description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </Form.Group>
      
      {/* Aggiungere qui i campi del form per altri dati del veicolo */} 
      

      <Button className="btnStyle mt-3" variant="outline-success" type="submit">
      add vehicle
      </Button>
    </Form>
    </Container>
  );
};

 const BackOffice = ({ carPicture, carBrand, carName, price }) => {



  return (
    <div>
      <h1 className='titleStyle'>The admin can add new models here:</h1>
      
      
<Card
      style={{ width: '14rem', height: '31rem', cursor: 'pointer' }}>
      <Card.Img variant="top" src={carPicture} height={270} />
      <Card.Body>
        <Card.Title >{carBrand}</Card.Title>
        <Card.Title > {carName}</Card.Title>
        <Card.Title >€ {price}</Card.Title>
        
        <div className="d-flex flex-wrap gap-1">
          <Button variant="warning">Not interested</Button>
          
            <Button variant="success">Details</Button>
          
        </div>
      </Card.Body>
    </Card>
</div>
  );
};

export default CarForm;