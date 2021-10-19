import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SuccessStories.css';
import ralph from '../../../images/ralph.jpg';
import carol from '../../../images/carol.jpg';

const SuccessStories = () => {
    return (
        <div>

            {/* Success */}
            <Row className="success-container mx-0 ">
                <Col className="d-flex flex-column align-items-center justify-content-center text-white px-3" id="benifits">
                    <h1>Success Stories of our Patients
                    </h1>
                    <p className="fs-5 my-2">Thousands of people get benefit</p>
                </Col>
            </Row>

            {/* Stories */}
            <div style={{ backgroundColor: 'rgb(240, 101, 152)' }}>
                <Container id="stories">
                    <Row lg={2} sm={1} className="">
                        {/* Stories Card */}
                        <Col lg={6} sm={12} className="p-4">
                            <div className="d-flex flex-column flex-md-row bg-white" style={{ borderRadius: '7px', padding: '36px 30px' }}>
                                <div className="mb-4">
                                    <img className="img-fluid" src={ralph} alt="" />
                                </div>
                                <div className="ps-4">
                                    <h3>Ralph Edwards</h3>
                                    <p className="fs-5 mb-2" style={{ color: 'rgb(240,101,152)', fontStyle: 'italic' }}>I am more than staisfied with doctor</p>
                                    <p className="fs-5 text-muted mb-1">Ann was the first therapist (we had seen 2 prior to her) to recognize our issues, understand them, and us, and lead us on the path to healing and recovery.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} sm={12} className="p-4">
                            <div className="d-flex flex-column flex-md-row bg-white" style={{ borderRadius: '7px', padding: '36px 30px' }}>
                                <div className="mb-4">
                                    <img className="img-fluid" src={carol} alt="" />
                                </div>
                                <div className="ps-4">
                                    <h3>Carol Fox</h3>
                                    <p className="fs-5 mb-2" style={{ color: 'rgb(240,101,152)', fontStyle: 'italic' }}>I have you to thank for helping me</p>
                                    <p className="fs-5 text-muted mb-1">I followed my therapist to this agency…the agency is set-up well and operates smoothly. I appreciate the newsletter, and the direct voicemail to my therapist.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Stories Bottom */}
                    <Row lg={4} md={2} sm={2} className="mt-5">
                        <Col lg={3} md={6} sm={6} className="d-flex flex-column justify-content-center align-items-center mb-3">
                            <h1 className="mb-0" style={{ fontSize: '50px', color: 'rgb(54 53 53)' }}>346</h1>
                            <hr id="fact-counter" />
                            <p className="counter-title mb-0">Happy Patients</p>
                        </Col>
                        <Col lg={3} md={6} sm={6} className="d-flex flex-column justify-content-center align-items-center mb-3">
                            <h1 className="mb-0" style={{ fontSize: '50px', color: 'rgb(54 53 53)' }}>55</h1>
                            <hr id="fact-counter" />
                            <p className="counter-title mb-0">Branches in City</p>
                        </Col>
                        <Col lg={3} md={6} sm={6} className="d-flex flex-column justify-content-center align-items-center mb-3">
                            <h1 className="mb-0" style={{ fontSize: '50px', color: 'rgb(54 53 53)' }}>1500</h1>
                            <hr id="fact-counter" />
                            <p className="counter-title mb-0">Qualified Doctors</p>
                        </Col>
                        <Col lg={3} md={6} sm={6} className="d-flex flex-column justify-content-center align-items-center mb-3">
                            <h1 className="mb-0" style={{ fontSize: '50px', color: 'rgb(54 53 53)' }}>11</h1>
                            <hr id="fact-counter" />
                            <p className="counter-title mb-0">Award Winner</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SuccessStories;