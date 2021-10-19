import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import useServices from './../../../hooks/useServices';

const Services = () => {
    const [services] = useServices();

    return (
        <>
            {/* Servie Header */}
            <div id="sevices" className="d-flex flex-column align-items-center justify-content-center pt-3">
                <img className="" src="https://i.ibb.co/KwSJXsY/brain.jpg" alt="" style={{ width: '100px' }} />
                <h1 className="" style={{ color: 'rgb(111 112 112)', fontFamily: 'Cormorant Garamond, serif', fontSize: '50px' }}>What we can offer</h1>
                <p style={{ color: 'rgb(240, 101, 152)' }}>AFFORDABLE SERVICES</p>
            </div>

            <Container className="px-0 my-5 pb-5">
                <Row xl={3} lg={2} md={1} sm={1} className="justify-content-center px-5" id="services-row">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Services;