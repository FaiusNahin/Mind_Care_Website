import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel fade className="h-50">

            {/* Slider-1 */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/Y7fgtHV/Young-parents-had-troubles-in-their-relationship-The-daughter-was-depressed-Pshycoterapist-solved-th.jpg'
                    style={{ filter: 'grayscale(50%)' }}
                    alt=""
                />
                <Carousel.Caption>
                    <h1>Best therapy makes Excellent yours <span style={{ color: '#f06598' }}>family</span></h1>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slider-2 */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/w4Yvhth/Young-angry-couple-after-therapy-session-with-family-psychologist.jpg'
                    style={{ filter: 'grayscale(50%)' }}
                    alt=""
                />
                <Carousel.Caption>
                    <h1>Councelling for your <span style={{ color: '#f06598' }}>better</span> life</h1>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slider-3 */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/Y7fgtHV/Young-parents-had-troubles-in-their-relationship-The-daughter-was-depressed-Pshycoterapist-solved-th.jpg'
                    style={{ filter: 'grayscale(50%)' }}
                    alt=""
                />
                <Carousel.Caption>
                    <h1>Improve people live & Benifit <span style={{ color: '#f06598' }}>society!</span></h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;