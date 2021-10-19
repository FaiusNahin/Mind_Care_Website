import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Seminar from '../Seminar/Seminar';
import useSeminars from './../../../hooks/useSeminars';

const Seminars = () => {
    const [seminars] = useSeminars();

    return (
        <Container className="my-5">
            {/* Seminar Heading */}
            <h1 className="fw-bold text-center py-5" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'rgb(80, 80, 80)', fontSize: '50px' }}>Our Events & Seminar</h1>
            <Row lg={2} md={1} sm={1} className="px-3">
                {
                    seminars.map(seminar => <Seminar
                        key={seminar.id}
                        seminar={seminar}
                    ></Seminar>)
                }
            </Row>
        </Container>
    );
};

export default Seminars;