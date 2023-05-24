// eslint-disable-next-line no-unused-vars
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';





const Category = () => {
    return (
        <section className='mt-24 mb-24'>
            <SectionTitle
            subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
            >
            </SectionTitle>


            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src="https://i.ibb.co/DWPgc9J/slide1.jpg" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>SALADS</h3>       
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/xHBnJ7P/slide2.jpg" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>PIZZAS</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/LZ1Bnts/slide3.jpg" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>SOUPS</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/WsG2wNm/slide4.jpg" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>DESSERTS</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/DWPgc9J/slide1.jpg" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>SALADS</h3>
            </SwiperSlide>
        
      </Swiper>

      
        </section>
    );
};

export default Category;