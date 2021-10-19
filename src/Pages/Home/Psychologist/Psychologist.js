import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import signature from '../../../images/signature.png';
import './Psychologist.css'
import { Link } from 'react-router-dom';

const Psychologist = () => {
    return (
        <div id="psychologist-container">
            <Container fluid="md">
                <Row lg={2} md={1} sm={1} className="gx-5">

                    {/* Psychologist Left*/}
                    <Col lg={6} md={12} sm={12} id="psychologist-img">
                        <img className="w-100" src='https://i.ibb.co/jM14LQL/sychologist-person.png' alt="" />
                    </Col>

                    {/* Psychologist Right*/}
                    <Col lg={6} md={12} sm={12} className="d-flex flex-column align-items-start justify-content-center">

                        {/* Psychologist Heading*/}
                        <h1 id="psychologist-heading">Dr Noorie Abbas</h1>
                        <p id="psychologist-info" className="fs-4">Psychologist with 12 years experience</p>

                        {/* Psychologist Info*/}
                        <p className="text-secondary fs-5 my-3" >There's nothing we wont try. Never heard the word impossible. This time there's no stopping us. Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The power less in a world of criminals who operate above the law.</p>
                        <img className="my-4 pb-2" src={signature} alt="" />
                        <Link to="/appointment">
                            <button id="appointment-button" className="fs-4 px-5 py-3 border-0 mb-5">GET APPOINTMENT</button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Psychologist;