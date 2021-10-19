import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    const googleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <Container fluid>
            <Row lg={2} md={1} sm={1}>

                {/* Login Left */}
                <Col lg={6} md={12} sm={12} className="form-container d-flex flex-column justify-content-center align-items-center">
                    <h1 className="my-4 fw-bold" style={{ fontSize: '42px', color: 'rgb(80, 80, 80)' }}>
                        Sign In to <span style={{ color: '#838484' }}>Mind</span>
                        <span style={{ color: '#f06598' }}>Care</span>
                    </h1>
                    <div className="d-flex justify-content-evenly my-3 g-4" style={{ width: '16%' }}>
                        <button onClick={googleSignIn} className="border border-0 bg-white"><img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" /></button>

                    </div>
                    <p className="mb-0">Or use your email account:</p>

                    {/* Login Form */}
                    <form className="" style={{ width: '60%' }}>
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
                            <button type="submit" className="btn py-3 px-5 mt-4 mb-3 text-white signup-button" style={{ borderRadius: '7px', backgroundColor: 'rgb(244 38 106)', fontWeight: '700' }}>LogIn</button>
                        </div>
                    </form>
                </Col>

                {/* Login Right */}
                <Col lg={6} md={12} sm={12} className="welcome-img d-flex justify-content-center align-items-center text-white text-center">
                    <div className="">
                        <h1 className="fw-bold mb-3"> Hello There, Join Us</h1>
                        <p>Enter your personal details and join the learning community</p>
                        <Link to="/signup">
                            <button type="submit" className="btn py-3 px-5 mt-4 bg-white signin-button" style={{ borderRadius: '7px', fontWeight: '700', color: '#505050' }}>Sign Up</button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LogIn;