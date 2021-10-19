import React from 'react';
import { Col } from 'react-bootstrap';

const Detail = (props) => {
    const { name, img, description, benefitInfo, info1, info2, info3, info4, specalist, specalistThumb, serialDate } = props.detail

    return (
        <>
            <Col lg={8} md={12} sm={12} className="px-0">
                <div className="d-flex align-items-center justify-content-center">
                    <img className="" src={img} alt="" style={{ width: '60%' }} />
                </div>
                <div className="d-flex flex-column justify-content-center px-4 my-4">
                    <h1 className="fw-bold" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '50px', color: '#dd1c5d' }}>{name}</h1>
                    <p className="text-black-50 mt-3" style={{ fontSize: '20px' }}>{description}</p>

                    <h2 className="fw-bold mt-3 " style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '45px', color: 'rgb(102 96 96)' }}>Benefits of Therapy</h2>

                    <p className="text-black-50 mb-4" style={{ fontSize: '20px' }}>{benefitInfo}</p>

                    <div className="px-4 mt-2">
                        <p className="text-black-50" style={{ fontSize: '20px' }}>
                            <i className="fas fa-greater-than fs-6 me-3" style={{ color: 'rgb(238, 53, 115)' }}></i> {info1}</p>
                        <p className="text-black-50" style={{ fontSize: '20px' }}>
                            <i className="fas fa-greater-than fs-6 me-3" style={{ color: 'rgb(238, 53, 115)' }}></i> {info3}</p>
                        <p className="text-black-50" style={{ fontSize: '20px' }}>
                            <i className="fas fa-greater-than fs-6 me-3" style={{ color: 'rgb(238, 53, 115)' }}></i> {info2}</p>
                        <p className="text-black-50" style={{ fontSize: '20px' }}>
                            <i className="fas fa-greater-than fs-6 me-3" style={{ color: 'rgb(238, 53, 115)' }}></i> {info4}</p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={12} sm={12} className="px-4 mt-5">
                <h2 className="fw-bold mt-3 mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '45px', color: 'rgb(102 96 96)' }}>Specalist</h2>
                <img className="w-100" src={specalistThumb} alt="" />
                <h2 className="fw-bold mt-4 mb-0" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '38px', color: '#dd1c5d' }}>{specalist}</h2>
                <p className="fs-5 text-black-50" style={{ fontWeight: '500' }}>Available on: <span className="fw-normal" style={{ fontSize: '20px', color: 'rgb(240, 101, 152)' }}>{serialDate}</span></p>
                <button id="appointment-button" className="fs-4 px-4 py-3 border-0 my-3">GET APPOINTMENT</button>
            </Col>
        </>
    );
};

export default Detail;