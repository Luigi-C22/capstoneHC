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
        <div className='image-container'>
        <img className='logoModal sliding-image' src ={logoCar} alt="logo car" />
        </div>
        <h4>Our mission</h4>
        <p className='textStyle'>
          We sell the cars of your dreams. Buy it NOW!!
        </p>
        <p className='addressStyle'>
        You can find us in:
        Via Pinciana, 15
        00156 Rome - Italy 
        </p>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default WhoWeAre;