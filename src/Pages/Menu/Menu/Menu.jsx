// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover
        img={"https://i.ibb.co/Kzr1ymS/banner3.jpg"}
        title={"our menu"}
      ></Cover>


      {/* main cover */}

      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>

        {/* offered menu items */}

      <MenuCategory items={offered}></MenuCategory>

      
          {/* dessert menu items */}

        <MenuCategory items={desserts} title="dessert" img="https://i.ibb.co/hmv2bkK/dessert-bg.jpg"></MenuCategory>

        <MenuCategory items={pizza} title="pizza" img="https://i.ibb.co/dr0cbJf/pizza-bg.jpg"></MenuCategory>

        <MenuCategory items={salad} title="salad" img="https://i.ibb.co/sJpPnJ5/salad-bg.jpg"></MenuCategory>

        <MenuCategory items={soup} title="soup" img="https://i.ibb.co/fFnXnXt/soup-bg.jpg"></MenuCategory>

      

        

    </div>
  );
};

export default Menu;
