import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MyFooter.css';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { RiCopyrightLine } from 'react-icons/ri';
import copyright from '../assets/copyright.png';
import { Link } from 'react-router-dom';

const MyFooter = () => {


  return (
    <footer className="mt-5 footer lead display-5 bg-dark ">
      <div className="container">
        <div className="row">
          <div className='col d-flex flex-column socialTxt'>
            <span > Terms & Conditions</span>
            <span > Curiosity </span>
            <span > Partners </span>
            <span > Work with Us </span>
          </div>
          <div className='col d-flex flex-column socialTxt'>
            <span > Seguici sui Social:</span>
            <span > Twitter <FaTwitter /></span>
            <span > Instagram <FaInstagram /></span>
            <span > Facebook <FaFacebook /></span>
          </div>
          <div className='col d-flex flex-column socialTxt'>
            <span> Help</span>
            <span> Blog</span>
            <span> Press</span>
            <span> Credits</span>
          </div>
          <div className='col d-flex flex-column socialTxt'>
            <span> Stay tuned</span>
            <span> Policy</span>
            <span> Our mission</span>
            <span> Contact Us</span>
          </div>
        </div>
        <div className="copyRi">
          <img className='copyRightStyle' src={copyright} alt="logo car" />
        </div>
      </div>
    </footer>
  );

}

export default MyFooter;