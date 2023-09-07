import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import carLogo from '../assets/logo-trasparente.png';
import siteName from '../assets/hyperCar-Destine.png';
import Modal from 'react-bootstrap/Modal';
import '../styles/MyNav.css';
import logoCar from '../assets/logo_car.jpg';
import WhoWeAre from './modals/WhoWeAre';

function navigationBar() {

  const[modalShow, setModalShow] = useState(false); //per utilizzare il modale

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img className='logo-img' src={carLogo} alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link> 
              <Link to = "/">
              <img className='siteName' src={siteName} alt="Site name" />
              </Link>
              </Nav.Link>
              
            <Nav.Link href="#action2">Our models</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Look inside</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Drive it
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item onClick={ ()=> setModalShow(true)}>
                Who we are
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" disabled>
              Log In
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
      <WhoWeAre show={modalShow} onHide={()=> setModalShow(false)} />
     ;

    </Navbar>
  );
}

export default navigationBar;