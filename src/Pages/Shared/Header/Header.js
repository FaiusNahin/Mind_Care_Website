import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img from './../../../images/care.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
            <Container className="align-items-end">
                <Nav.Link as={Link} to="/home" className="" ><Image src={img} style={{ width: '150px' }} /></Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="ms-4" id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Link className="fs-5 mx-2" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="fs-5 mx-2" as={HashLink} to="/home#sevices">Services</Nav.Link>
                    </Nav>
                    <Nav className="align-items-lg-end">
                        <Navbar.Text className="mx-2" style={{ fontSize: '18px' }}>Faius Mojumder Nahin</Navbar.Text>
                        <Nav.Link className="fs-5 mx-2" as={Link} to="/login" style={{ color: '#f06598', fontWeight: '500' }}>Login</Nav.Link>
                        <Nav.Link className="rounded-pill fs-5 mx-2" as={Link} to="/signup" style={{ color: '#ed145c', fontWeight: '500' }}>Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;