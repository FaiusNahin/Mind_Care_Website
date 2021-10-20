import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Seminar.css'

const Seminar = (props) => {
    const { seminarName, img, date, description, month, place, time } = props.seminar;

    return (
        <>
            {/* Seminar Info */}
            <Col lg={6} md={12} sm={12} className="px-2 mt-3 mb-4" id="seminar">
                <div className="mx-3 h-100 rounded-3" id="seminar-card">
                    <Row className="w-100 mx-0" id="seminar-thumb">
                        <img className="w-100 px-0 rounded-top" src={img} alt="" />
                    </Row>
                    <Row lg={2} md={2} sm={1} className="px-4 mt-4" id="seminar-details">

                        {/* Seminar Date and Month */}
                        <Col lg={3} md={3} sm={12} className="d-flex flex-column align-items-center justify-content-center text-white rounded-circle mb-3" style={{ backgroundColor: '#f06598', width: '90px', height: '90px' }}>
                            <h3 className="mb-0 fw-bold">{date}</h3>
                            <p className="mb-0 fs-5">{month}</p>
                        </Col>

                        {/* Seminar Time and place */}
                        <Col lg={9} md={9} sm={12} className="ms-4 px-0" id="seminar-info">
                            <div className="d-flex flex-column justify-content-start flex-md-row fs-5 mb-2">
                                <p className="mb-0 me-4" style={{ color: 'rgb(80, 80, 80)' }}>
                                    <i className="far fa-clock" style={{ color: 'rgb(238, 53, 115)' }}></i> {time}
                                </p>
                                <p className="mb-0" style={{ color: 'rgb(80, 80, 80)' }}>
                                    <i className="fas fa-map-marker-alt" style={{ color: 'rgb(238, 53, 115)' }}></i> {place}
                                </p>

                            </div>
                            {/* Seminar Name and Description*/}
                            <div>
                                <h2 className="fw-bold" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'rgb(238, 53, 115)' }}>{seminarName}</h2>
                                <p className="text-secondary" style={{ fontSize: '18px' }}>{description}</p>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Col>
        </>
    );
};

export default Seminar;