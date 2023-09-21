import React, { useEffect } from "react";
import jwtDecode from 'jwt-decode';
import Login from '../components/navigation/Login';
import {Outlet, useNavigate} from 'react-router-dom';

const auth = () => {
    return JSON.parse(localStorage.getItem('userLoggedIn'));

};

export const useSession = () => {
    const session = auth();
    const decodedSession = session ? jwtDecode(session) : null;

    const navigate = useNavigate();

    useEffect(() => {
        if(!session) {
            navigate("/", {replace: true});
        }
    }, [navigate, session]);

    return decodedSession;
};

const ProtectedRoutes = () => {
const isAuthorized = auth();
const session = useSession();

return isAuthorized ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;