import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import '../../styles/Login.css';
import logoCar from '../../assets/logo-trasparente.png';
import siteName from '../../assets/hyperCar-Destine.png';
import axios from 'axios';


const Login = () => {
    const [loginFormData, setLoginFormData] = useState({})

    const [checkboxChecked, setCheckboxChecked] = useState(false); //verifica che sia spuntato il checkbox
    const [showAlert, setShowAlert] = useState(false); //mostra un alert

    const handleCheckboxChange = (e) => {
        setCheckboxChecked(e.target.checked);
    };



    const onSubmit = async (e) => {
        e.preventDefault();
        //condizionali per il checkbox
        if (checkboxChecked) {
            
            //logica del Login
            await axios
                .post('http://localhost:5050/login', loginFormData)
                .then((res) => {
                    localStorage.setItem('userLoggedIn', JSON.stringify(res.data.token));
                }
        )} else {
            setShowAlert(true)
        }
    };

    return (

        <div className='login-container'>
            <div>
                <img className='logoModal' src={logoCar} alt="logo car" />
                <img className='logoModal' src={siteName} alt="Hyper Car" />
            </div>
            <form onSubmit={onSubmit}>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <input
                            className='p-2 bg-zinc-100 text-black rounded'
                            type='email'
                            name='email'
                            placeholder='@ e-mail'
                            onChange={(e) =>
                                setLoginFormData({
                                    ...loginFormData,
                                    email: e.target.value,
                                })
                            }
                        />
                    </Col>
                    <Col xs="auto">
                        <input
                            className='p-2 bg-zinc-100 text-black rounded'
                            type='password'
                            name='password'
                            placeholder='Password'
                            onChange={(e) =>
                                setLoginFormData({
                                    ...loginFormData,
                                    password: e.target.value,
                                })
                            }
                        /></Col>
                    <Col xs="auto">
                        <Button type="submit" className='p-2' variant='outline-success' >
                            Log In
                        </Button>
                    </Col>
                </Row>
                <Col xs="auto">
                    <Form.Check
                        type="checkbox"
                        id="autoSizingCheck"
                        className="mb-2"
                        label="I accept all condiotions"
                        onChange={handleCheckboxChange}
                        checked={checkboxChecked}
                    />
                </Col>
            </form>
            {showAlert && (
                <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                    <Alert.Heading>Warning please!</Alert.Heading>
                    <p>Please fill in all fields correctly and accept all conditions by checking the box.</p>
                </Alert>
            )}
        </div>



    );
}

export default Login;