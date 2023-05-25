// eslint-disable-next-line no-unused-vars
import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
     { title && <Cover
        img={img}
        title={title}
      ></Cover> }

      <div className="grid md:grid-cols-2 gap-10 my-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="text-black mt-6 btn btn-outline  border-b-4">Order Now</button></Link>
    </div>
  );
};

export default MenuCategory;
