// eslint-disable-next-line no-unused-vars
import React from "react";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="text-black mt-6 btn btn-outline bg-slate-100 border-b-4 ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
