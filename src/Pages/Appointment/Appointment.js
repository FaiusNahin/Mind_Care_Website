import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import img from '../../images/appointment.png';

const Appointment = () => {
    return (
        <Container className="my-5">
            <Row lg={2} md={1} sm={1} className="gx-5 pt-5">

                {/* Appointment Left */}
                <Col lg={6} md={12} sm={12} className=" border p-4 rounded-3 mb-5">

                    {/* Appointment Form */}
                    <Form>
                        <h2 className="" style={{ color: 'rgb(80, 80, 80)' }}>Make An Appointment</h2>
                        <p className="fs-5 text-secondary mt-2">To Confirm your Serial please Ensure your Appointment...</p>
                        <Row className="flex-column flex-md-row justify-content-center mt-4 pt-2">
                            <Form.Group className="mb-3 mx-auto" as={Row} controlId="formGridAddress2">
                                <Form.Select className="py-3 fs-5" aria-label="Floating label select example">
                                    <option>Select Doctor By Name</option>
                                    <option value="1">Kay Redfield Jamison</option>
                                    <option value="2">Judith Orloff</option>
                                    <option value="3">Dr Noorie Abbas</option>
                                    <option value="4">Margaret Mahler</option>
                                    <option value="5">Carole Lieberman</option>
                                    <option value="6">Fiona Caldicott</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Control className="py-3 fs-5" placeholder="Patient Name*" />
                            </Form.Group>

                            <Form.Group className="mb-3 " as={Col} controlId="formGridEmail">
                                <Form.Control className="py-3 fs-5" type="text" placeholder="Phone*" />
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                                <Form.Control className="py-3 fs-5" type="email" placeholder="E-mail*" />
                            </Form.Group>
                        </Row>

                        <Row className=" flex-column flex-md-row justify-content-center">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <input type="date" name="date" value="" className="py-3 fs-5 wpcf7-form-control wpcf7-date wpcf7-validates-as-date form-control rt-date col mb-3" aria-invalid="false" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <input type="text" name="time" value="" size="40" className="py-3 fs-5 wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control col mb-3" aria-required="true" aria-invalid="false" placeholder="Time*" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <textarea name="message" cols="40" rows="4" className="wpcf7-form-control wpcf7-textarea textarea form-control fs-5" aria-invalid="false" placeholder="Type Appintment Note"></textarea>
                            </Form.Group>
                        </Row>

                        <div className="text-center pt-3">
                            <Button className="px-5 py-2 fs-5 text-white" variant="" type="submit" style={{ backgroundColor: '#ed145c' }}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Col>

                {/* Appointment Right */}
                <Col lg={6} md={12} sm={12}>
                    <img className="w-75" src={img} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Appointment;