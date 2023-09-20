import React from "react";

import MyFooter from "../MyFooter";
import '../../styles/Error.css';
import fired from '../../assets/burnout.gif'

const Errorpage = () => {
  return (
    <>
      
            
            <h1 className="errorPage">
            you bourned out the site
            </h1>
            <div className="errorContainer">
            <img className="imgError" src={fired} alt="fire" />
            <h2 className="errorText">Error 404 page not found...</h2>
            </div>
            <MyFooter />
         
    </>
  );
};

export default Errorpage;