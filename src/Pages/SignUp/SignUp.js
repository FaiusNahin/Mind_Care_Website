import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebasee.init';
import useAuth from './../../hooks/useAuth';

initializeAuthentication();
const auth = getAuth();

const SignUp = () => {
    const { signInUsingGoogle } = useAuth();
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // Input Name
    const handleName = e => {
        setName(e.target.value);
    }
    // Input Email
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    // Input Password
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    // Handle Sign Up 
    const handleSignUp = e => {
        e.preventDefault();

        if (password.length < 8) {
            setError('Password Must Be Atleast 6 Characters long.');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 uppercase letters.');
            return;
        }

        // Create New User
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setNewProfile();
                setMessage('Congratulation You Have Registered!');
                verifyEmail();
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // Update User Profile
    const setNewProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {
            setError(error.message);
        });
    }

    // Verify User Email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }

    // Reset Password
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result);
            })
    }

    return (
        <Container fluid>
            {/* Sign Up Left Part*/}
            <Row lg={2} md={1} sm={1}>
                <Col lg={6} md={12} sm={12} className="form-container d-flex flex-column justify-content-center align-items-center">
                    <h1 className="my-4 fw-bold signup-heading" style={{ fontSize: '42px', color: '#838484' }}>Create an Account</h1>
                    <div className="d-flex justify-content-evenly my-3 g-4" style={{ width: '16%' }}>
                        <button onClick={signInUsingGoogle} className="border border-0 bg-white"><img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" /></button>

                    </div>
                    <p className="mb-2">Or use your email for registration:</p>
                    <p className="row mb-0 text-danger">{error}</p>
                    <h3 className="row my-0 text-success">{message}</h3>

                    {/* Sign Up Form*/}
                    <form onSubmit={handleSignUp} className="signup-form" style={{ width: '60%' }}>
                        {/* User Name */}
                        <div className="my-4">
                            <label htmlFor="exampleInputName" className="mb-1 fw-bold" style={{ color: '#505050' }}>Full Name</label>
                            <input onChange={handleName} type="text" className="form-control border border-2 " id="exampleInputName" aria-describedby="emailHelp" placeholder="Your Name" style={{ padding: '13px 15px' }} required />
                        </div>
                        {/* User Email */}
                        <div className="my-4">
                            <label htmlFor="exampleInputEmail1" className="mb-1 fw-bold" style={{ color: '#505050' }}>Email</label>
                            <input onBlur={handleEmail} type="email" className="form-control border border-2 text-black-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mindcare@support.com" style={{ padding: '13px 15px' }} required />
                        </div>
                        {/* User Password */}
                        <div className="mt-4">
                            <label htmlFor="exampleInputPassword1" className="mb-1 fw-bold" style={{ color: '#505050' }}>Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control border border-2 text-black-50" id="exampleInputPassword1" placeholder="Must 8 Characters" style={{ padding: '13px 15px' }} required />
                        </div>
                        <p className="text-danger"></p>
                        {/* Reset */}
                        <div className="text-center">

                            <a onClick={handleResetPassword} className="text-decoration-none text-secondary" href="">Forgot your password?</a>
                            <br />

                            <button type="submit" className="btn py-3 px-5 mt-4 mb-3 text-white signup-button" style={{ borderRadius: '7px', backgroundColor: 'rgb(244 38 106)', fontWeight: '700' }}>Sing Up</button>

                            <p>By signing up you agree to our <a href="" style={{ color: 'rgb(244 38 106)' }}>terms</a> of service.</p>
                        </div>
                    </form>
                </Col>

                {/* Sign Up Right */}
                <Col lg={6} md={12} sm={12} className="welcome-img d-flex justify-content-center align-items-center text-white text-center">
                    <div className="">
                        <h1 className="fw-bold mb-3">Welcome Back</h1>
                        <p>Already signed up, enter your details and start the learning today</p>
                        <Link to="/login">
                            <button type="submit" className="btn py-3 px-5 mt-4 bg-white signin-button" style={{ borderRadius: '7px', fontWeight: '700', color: '#505050' }}>LogIn</button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;