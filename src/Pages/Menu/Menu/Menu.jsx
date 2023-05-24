// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={"https://i.ibb.co/Kzr1ymS/banner3.jpg"}
        title={"our menu"}
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        img={"https://i.ibb.co/Kzr1ymS/banner3.jpg"}
        title={"our menu"}
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        img={"https://i.ibb.co/Kzr1ymS/banner3.jpg"}
        title={"our menu"}
      ></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
