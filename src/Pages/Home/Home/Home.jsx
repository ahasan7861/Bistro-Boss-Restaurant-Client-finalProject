// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import BistroParalax from '../Category/BistroParalax/BistroParalax';
import CallUs from '../PopularMenu/CallUs/CallUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroParalax></BistroParalax>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;