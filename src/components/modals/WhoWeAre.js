import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logoCar from '../../assets/logo_car.jpg';

function WhoWeAre(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Hyper Car
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src ={logoCar} alt="logo car" />
        <h4>Our mission</h4>
        <p>
          We sell the cars of your dream. Buy it if you can!!
        </p>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default WhoWeAre;