// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet-async";
import UseCart from "../../../hooks/UseCart";

const MyCart = () => {
    const [cart] = UseCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${total}</h3>
        <button className="btn btn-warning btn-sm text-white">PAY</button>
      </div>
    </div>
  );
};

export default MyCart;
