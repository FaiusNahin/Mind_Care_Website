import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, img, description } = props.service;

    return (
        // Service Cart
        <Col xl={4} lg={6} md={12} sm={12} className="service d-flex flex-column align-items-center px-0">
            <div className="mb-5" id="service-div">
                <img className="" src={img} alt="" />
                {/* Service Name */}
                <div id="service-name" className="ps-5 py-2" >
                    <h2>{name}</h2>
                </div>
                {/* Service Details */}
                <div className="ps-5" id="service-details">
                    <p className="text-white pb-3">{description.slice(0, 60)} <Link className="text-decoration-none" to={`/details/${id}`} style={{ color: '#f53c80' }}>...see more</Link></p>
                    <Link to={`/details/${id}`}><button id="details-button">More details</button></Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;