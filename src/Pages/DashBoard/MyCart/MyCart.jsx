// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet-async";
import UseCart from "../../../hooks/UseCart";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
    const [cart] = UseCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold flex justify-evenly mb-6 h-[60px] items-center">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${total}</h3>
        <button className="btn btn-warning btn-sm text-white">PAY</button>
      </div>

      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item, index) => <tr
        key={item._id}>
            <td>
              {index + 1}
            </td>
            <td>
              
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              
            </td>
            <td>
              {item.name}
            </td>
            <td className="text-end">${item.price}</td>
            <td>
              <button className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt></FaTrashAlt> </button>
            </td>
          </tr>)
      }
      
      
    </tbody>
    
    
    
  </table>
</div>



    </div>
  );
};

export default MyCart;