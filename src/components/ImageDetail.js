import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import car01 from '../assets/aventadorGialla.png';

const ImageDetail = () => {
  return (
    <div ><h2 className='titleStyle'>Details</h2>
      <div className='d-flex justify-content-center'>

        <div className='spanText'>
          <span className='cardTitle'>Brand: Lamborghini</span><br></br>
          <span className='cardTitle'>Model: Aventador SV</span><br></br>
          <span>Engine:</span><br></br>
          <ul>
            <li>Type: V12</li>
            <li>CC: 6.5L</li>
            <li>HP: 700</li>
          </ul>
          <span>Price: € 560.000</span>
        </div>


        <div>
          <img className='detailStyle img-fluid' src={car01} alt="CarPhoto 1" />
          <Nav.Link className='mt-3'>
            <Link to="/ImageGallery">
              <Button variant="outline-success">
                Back to Models
              </Button>
            </Link>
          </Nav.Link>
        </div>
        

      </div>

    </div>
  );
};

export default ImageDetail;

/* questo componente deve mostrare i dettagli dopo aver cliccato sulle miniature */