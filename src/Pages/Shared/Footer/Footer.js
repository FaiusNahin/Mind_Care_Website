import React from 'react';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import img from '../../../images/care.png';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {

    return (
        <div style={{ backgroundColor: 'rgb(80 80 80)' }}>
            <Container className="pt-5 pb-4">
                <Row lg={4} md={2} sm={1} className="py-4 px-4 gy-md-5 ">
                    <Col lg={3} md={6} sm={12} className="px-0 pb-5">
                        <img src={img} alt="" style={{ width: '150px' }} />
                        <p className="text-white-50 my-3 pt-2" style={{ width: '90%' }}>Waters divided said aims kind seicond winged form it tree after female the deep at itself creepeth land bring place day sea dont caus may thing open who their midst to seas.</p>
                        <div id="icons">
                            <a href="https://www.facebook.com/" className="me-3"><i className="fab fa-facebook-f fs-5 " style={{ color: 'rgb(238 53 115)' }}></i></a>
                            <a href="https://twitter.com/" className="mx-3"><i className="fab fa-twitter fs-5 " style={{ color: 'rgb(238 53 115)' }}></i></a>
                            <a href="https://www.youtube.com/" className="mx-3"><i className="fab fa-youtube fs-5 " style={{ color: 'rgb(238 53 115)' }}></i></a>
                            <a href="https://www.linkedin.com/" className="mx-3"><i className="fab fa-linkedin-in fs-5 " style={{ color: 'rgb(238 53 115)' }}></i></a>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="pb-5 d-flex flex-column align-items-start align-items-md-center">
                        <div className="d-flex flex-column align-items-start">
                            <h3 className="text-white pb-2 fs-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Services</h3>
                            <div >
                                <p className="mb-2"> <Nav.Link className="text-decoration-none text-white-50 p-0" as={HashLink} to="/home#service">Depression therapy</Nav.Link></p>

                                <p className="mb-2"> <Nav.Link className="text-decoration-none text-white-50 p-0" as={HashLink} to="/home#service">Individual therapy</Nav.Link></p>

                                <p className="mb-2"> <Nav.Link className="text-decoration-none text-white-50 p-0" as={HashLink} to="/home#service">Couples therapy</Nav.Link></p>

                                <p className="mb-2"> <Nav.Link className="text-decoration-none text-white-50 p-0" as={HashLink} to="/home#service">Children therapy</Nav.Link></p>

                                <p className="mb-2"> <Nav.Link className="text-decoration-none text-white-50 p-0" as={HashLink} to="/home#service">Pre-divorce therapy</Nav.Link></p>

                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="pb-5 d-flex flex-column align-items-center">
                        <div className="d-flex flex-column align-items-start">
                            <h3 className="text-white pb-2 fs-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Our Contacts</h3>
                            <div>
                                <p className="text-white-50"><i className="fas fa-phone-alt me-2" style={{ color: 'rgb(238 53 115)' }}></i> +880 1860260288</p>
                                <p className="text-white-50"> <i className="fas fa-envelope me-2" style={{ color: 'rgb(238 53 115)' }}></i> mindcare@support.com</p>
                                <p className="text-white-50"> <i className="fas fa-map-marker-alt me-2" style={{ color: 'rgb(238 53 115)' }}></i>  Dhanmondi Lake Road
                                    Dhanmondi, Dhaka-1500</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="pb-5">
                        <h3 className="text-white pb-2 fs-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Our portfolio</h3>
                        <Row lg={3} md={3} sm={2} className="g-3">
                            <Col lg={4} md={4} xs={6}>
                                <img className="w-100" src="https://i.ibb.co/Fx36Fb2/portfolio-1.jpg" alt="" />
                            </Col>
                            <Col lg={4} md={4} xs={6}>
                                <img className="w-100" src="https://i.ibb.co/Fh6nKR7/portfolio-2.jpg" alt="" />
                            </Col>
                            <Col lg={4} md={4} xs={6}>
                                <img className="w-100" src="https://i.ibb.co/6FYNY1y/portfolio-3.jpg" alt="" />
                            </Col>
                            <Col lg={4} md={4} xs={6}>
                                <img className="w-100" src="https://i.ibb.co/GF76P7N/portfolio-4.jpg" alt="" />
                            </Col>
                            <Col lg={4} md={4} xs={6}>
                                <img className="w-100" src="https://i.ibb.co/Ss2rcR9/portfolio-5.jpg" alt="" />
                            </Col>
                            <Col lg={4} md={4} xs={6}>
                                <img className="w-100" src="https://i.ibb.co/h2h2ZGK/portfolio-6.jpg" alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="col-sm-12 text-center" style={{ color: '#858686' }}>
                    Copyright &copy; 2021 MindCare. All Rights Reserved</div>
            </Container>
        </div>
    );
};

export default Footer;