import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/Success.css'

const Success = () => {
    const { token } = useParams();
    const navigate = useNavigate(); //attesa prima di reindirizzare alla home

    console.log(token);

useEffect(() => {
    
    const saveUserToLocalStorage = () => {
        if (token) {
            localStorage.setItem('userLoggedIn', token);
        }
    };
    saveUserToLocalStorage();

    //ritardo del reindirizzamento alla homepage
    const timer = setTimeout(() => {
        navigate('/');
    }, 5000);

    //elimina il timer quando il componente viene smontato
    return () => clearTimeout(timer);
}, [token, navigate]);

    return (
        <div className='h-screen w-full container'>
            <div className='loggedInForm'>
                <span className='loggedText'>
                    Well done! You are Logged in!!
                </span>
            </div>
        </div>
    );
};

export default Success;