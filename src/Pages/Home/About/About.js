import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (

        <Container fluid="md">
            <Row lg={2} sm={1} className="my-5 py-5">

                {/* About Left Part */}
                <Col lg={6} sm={12} className="d-flex flex-column justify-content-center px-0">
                    {/* about heading */}
                    <p className="fs-5 mb-0" style={{ fontStyle: 'italic', color: 'darkblue' }}>Who we are
                    </p>
                    <h2>Psychology Clinic<span className="fs-1" style={{ color: '#ed145c' }}>_</span>
                    </h2>
                    <p className="text-secondary my-3" style={{ fontSize: '18px' }}>There's nothing we wont try. Never heard the word impossible. This time there's no stopping us. Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The power less in a world of criminals who operate</p>
                    {/* about info */}
                    <div className="row px-4 gx-3">
                        <div className="column col-md-6 col-sm-6 col-xs-12 px-2">
                            <ul style={{ fontSize: '18px' }}>
                                <li>Personal Disorder</li>
                                <li>Couple Therapy</li>
                                <li>Health Psychology</li>
                                <li>Child Therapy</li>
                            </ul>
                        </div>

                        <div className="column col-md-6 col-sm-6 col-xs-12 px-2">
                            <ul style={{ fontSize: '18px' }}>
                                <li>Healthy Lifestyles</li>
                                <li>Guided Self-Change</li>
                                <li>Individual Counseling</li>
                                <li>Anxiety Disorder</li>
                            </ul>
                        </div>
                    </div>
                </Col>

                {/* About Right Part */}
                <Col lg={6} sm={12} className="d-flex align-items-center justify-content-center">
                    <img className="w-75" src='https://i.ibb.co/d6DNGzn/In-the-psychologist-s-office-Man-and-woman-talking.jpg' alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default About;