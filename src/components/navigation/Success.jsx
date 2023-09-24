import React from 'react'
import { useParams } from 'react-router-dom';


const Success = () => {
    const { token } = useParams();
    console.log(token);

    const saveUserToLocalStorage = () => {
        if (token) {
            localStorage.setItem('userLoggedIn', token);
        }
    };

    return (
        <div className='h-screen w-full'>
            <div>Logged in successfully</div>
        </div>
    );
};

export default Success;