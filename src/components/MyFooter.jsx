import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MyFooter.css';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { RiCopyrightLine } from 'react-icons/ri';
import copyright from '../assets/copyright4.png';
import { Link } from 'react-router-dom';

const MyFooter = () => {


  return (
    <footer className="mt-5 footer lead display-5 bg-light">
<div>
      <div className="container">
        <div className="row">
          <div className='col d-flex flex-column socialTxt'>
            <span > Terms & Conditions</span>

            <span > Partners </span>
            <span > Work with Us </span>
          </div>
          <div className='col d-flex flex-column socialTxt'>

            <span > X(ex-Twitter) <FaTwitter /></span>
            <span > Instagram <FaInstagram /></span>
            <span > Facebook <FaFacebook /></span>
          </div>
          <div className='col d-flex flex-column socialTxt'>

            <span> Blog</span>
            <span> Press</span>
            <span> Credits</span>
          </div>
          <div className='col d-flex flex-column socialTxt'>

            <span> Policy</span>
            <span> Our mission</span>
            <span> Contact Us</span>
          </div>
        </div>
      </div>
      <img className='copyRightStyle' src={copyright} alt="logo car" />
</div>
    </footer>
  );

}

export default MyFooter;