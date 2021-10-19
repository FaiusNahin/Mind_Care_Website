import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.jpg'

const NotFound = () => {
    return (
        // Not Found
        <div className="text-center">
            <img className="w-50" src={img} alt="" />
            <br />
            <Link to="/"><button className="my-5 px-5 py-2 text-white border-0 rounded fw-bold fs-5 signup-button" style={{ backgroundColor: '#ed145c' }}>Go To Home</button></Link>
        </div>
    );
};

export default NotFound;