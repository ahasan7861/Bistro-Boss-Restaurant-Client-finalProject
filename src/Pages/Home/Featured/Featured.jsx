// eslint-disable-next-line no-unused-vars
import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./Featured.css";
import moment from 'moment';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed  text-white mt-24 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>

      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
        <div className="md:me-20">
          <img src="https://i.ibb.co/SBPdKMz/featured.jpg" alt="" />
        </div>
        <div>



          
          <p>{moment().format("MMM DD, YYYY")}</p>




          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minima, quidem impedit nobis ratione magnam est recusandae molestiae inventore quod adipisci maiores, veritatis, facilis laboriosam exercitationem illum nisi minus deserunt hic totam! Necessitatibus consequatur a nihil dolore totam beatae quam facilis autem natus. Ullam omnis aspernatur distinctio explicabo molestiae possimus?............
          </p>
          <button className="text-white mt-6 btn btn-outline  border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
