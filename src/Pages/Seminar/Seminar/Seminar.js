import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Seminar = (props) => {
    const { seminarName, img, date, description, month, place, time } = props.seminar;

    return (
        <>
            {/* Seminar Info */}
            <Col lg={6} md={12} sm={12} className=" px-2 mb-4" style={{}} >
                <Row className="w-100 mx-0">
                    <img className="w-100" src={img} alt="" />
                </Row>
                <Row lg={2} md={2} sm={1} className="px-4 mt-4">
                    <Col lg={3} md={3} sm={12} className="d-flex flex-column align-items-center justify-content-center text-white rounded-circle mb-4" style={{ backgroundColor: '#f06598', width: '90px', height: '90px' }}>
                        <h3 className="mb-0 fw-bold">{date}</h3>
                        <p className="mb-0 fs-5">{month}</p>
                    </Col>
                    <Col lg={9} md={9} sm={12} className=" ms-2">
                        <div className="d-flex flex-column justify-content-start flex-md-row fs-5 mb-2 ms-2">
                            <p className="mb-0 me-4" style={{ color: 'rgb(80, 80, 80)' }}>
                                <i className="far fa-clock" style={{ color: 'rgb(238, 53, 115)' }}></i> {time}
                            </p>
                            <p className="mb-0" style={{ color: 'rgb(80, 80, 80)' }}>
                                <i className="fas fa-map-marker-alt" style={{ color: 'rgb(238, 53, 115)' }}></i> {place}
                            </p>

                        </div>
                        <div className="">
                            <h2 className="fw-bold" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'rgb(238, 53, 115)' }}>{seminarName}</h2>
                            <p className="text-secondary" style={{ fontSize: '18px' }}>{description}</p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </>
    );
};

export default Seminar;