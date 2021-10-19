import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slider-1.jpg';
import slider2 from '../../../images/slider-2.jpg';
import slider3 from '../../../images/slider-3.jpg';

const Banner = () => {
    return (
        <Carousel fade className="h-50">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    style={{ filter: 'grayscale(50%)' }}
                    alt=""
                />
                <Carousel.Caption>
                    <h1>Best therapy makes Excellent yours <span style={{ color: '#f06598' }}>family</span></h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    style={{ filter: 'grayscale(50%)' }}
                    alt=""
                />
                <Carousel.Caption>
                    <h1>Councelling for your <span style={{ color: '#f06598' }}>better</span> life</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
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