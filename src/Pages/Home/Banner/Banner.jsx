// eslint-disable-next-line no-unused-vars
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="text-center">
      <Carousel>
        <div>
          <img src="https://i.ibb.co/LNmFKcB/01.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://i.ibb.co/J36P0q1/02.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://i.ibb.co/zr73pNw/03.png" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="https://i.ibb.co/zFGx6Kf/04.jpg" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="https://i.ibb.co/vvTckrD/05.png" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="https://i.ibb.co/5607QD1/06.png" />
          <p className="legend">Legend 6</p>
        </div>
        
      </Carousel>
    </div>
  );
};

export default Banner;
