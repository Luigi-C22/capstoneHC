import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import carLogo from '../assets/logo-trasparente.png';
import siteName from '../assets/hyperCar-Destine.png';
import '../styles/MyNav.css';
import WhoWeAre from './modals/WhoWeAre';
import { FaHome } from 'react-icons/fa';
//import { useSession } from '../middlewares/ProtectedRoutes';


const NavigationBar = () => {

   /* const session = useSession();  */  //hook per vilualizzare il nome loggato

  const [modalShow, setModalShow] = useState(false); //per utilizzare il modale 'Who We Are', inizialmente non visibile

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          {/* l'immagine logo del sito è cliccabile e rimanda alla homepage */}
          <Link to="/">
            <img className='logo-img' src={carLogo} alt="Logo" />
            <FaHome className="iconStyle" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
          
          {/*  <Nav.Link>
              <div>
                {session && <p>Ciao {session.userName} benvenuto su </p>}
              </div>
            </Nav.Link> */} 


            {/* il nome del sito è cliccabile e rimanda sulla homepage */}
            <Nav.Link>
              <Link to="/">
                <img className='siteName' src={siteName} alt="Site name" />
              </Link>
            </Nav.Link>
           
          

            {/* riferimenti della navbar */}
            <Nav.Link>
              <Link to="/ImageGallery">
                <Button variant="outline-success">
                  New models
                </Button>
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/BlogSection">
                <Button variant="outline-success">
                  Go to Users posts
                </Button>
              </Link>
            </Nav.Link>

            <Nav.Link href="*" ><Button variant="outline-success">Dont'go here</Button></Nav.Link>

            <Nav.Link>
              <Link to="/Login">
                <Button variant="outline-success" >
                  Log In
                </Button>
              </Link>
            </Nav.Link>

            <NavDropdown title={<Button variant="outline-success">Links</Button>} id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => setModalShow(true)}>
                <Button variant="outline-success">Who we are</Button>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link>
                  <Link to="/BackOffice">
                    <Button variant="outline-success">
                      Back Office
                    </Button>
                  </Link>
                </Nav.Link>
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>
          {/* { <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> } */}
        </Navbar.Collapse>
      </Container>
      <WhoWeAre show={modalShow} onHide={() => setModalShow(false)} />

    </Navbar>
  );
}

export default NavigationBar;