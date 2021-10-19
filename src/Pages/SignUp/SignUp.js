import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <Container fluid>
            {/* Sign Up Left */}
            <Row lg={2} md={1} sm={1}>
                <Col lg={6} md={12} sm={12} className="form-container d-flex flex-column justify-content-center align-items-center">
                    <h1 className="my-4 fw-bold" style={{ fontSize: '42px', color: '#838484' }}>Create an Account</h1>
                    <div className="d-flex justify-content-evenly my-3 g-4" style={{ width: '16%' }}>
                        <button className="border border-0 bg-white"><img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" /></button>

                    </div>
                    <p className="mb-2">Or use your email for registration:</p>

                    {/* Sign Up Form*/}
                    <form style={{ width: '60%' }}>
                        <div className="my-4">
                            <label htmlFor="exampleInputName" className="mb-1 fw-bold" style={{ color: '#505050' }}>Full Name</label>
                            <input type="text" className="form-control border border-2 " id="exampleInputName" aria-describedby="emailHelp" placeholder="Your Name" style={{ padding: '13px 15px' }} required />
                        </div>
                        <div className="my-4">
                            <label htmlFor="exampleInputEmail1" className="mb-1 fw-bold" style={{ color: '#505050' }}>Email</label>
                            <input type="email" className="form-control border border-2 text-black-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mindcare@support.com" style={{ padding: '13px 15px' }} required />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="exampleInputPassword1" className="mb-1 fw-bold" style={{ color: '#505050' }}>Password</label>
                            <input type="password" className="form-control border border-2 text-black-50" id="exampleInputPassword1" placeholder="Must 8 Characters" style={{ padding: '13px 15px' }} required />
                        </div>
                        <p className="text-danger"></p>
                        <div className="text-center">

                            <a className="text-decoration-none text-secondary" href="">Forgot your password?</a>
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