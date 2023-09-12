import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logoCar from '../../assets/logo-trasparente.png';
import siteName from '../../assets/hyperCar-Destine.png'
import '../../styles/Modal.css';

function WhoWeAre(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <img className='logoModal' src={siteName} alt="Hyper Car" />
      </Modal.Header>
      <Modal.Body>
        <img className='logoModal' src ={logoCar} alt="logo car" />
        <h4>Our mission</h4>
        <p>
          We sell the cars of your dream. Buy it if you can!!
        </p>
        <p>
          You can find us in:
        </p>
        <p>Via Pinciana, 15</p>
        <p>00156 Rome - Italy </p>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default WhoWeAre;