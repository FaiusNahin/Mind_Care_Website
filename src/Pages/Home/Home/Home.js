import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import SuccessStories from '../SuccessStories/SuccessStories';
import Psychologist from './../Psychologist/Psychologist';
import Services from './../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Psychologist></Psychologist>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;