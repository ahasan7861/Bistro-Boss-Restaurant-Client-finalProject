// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseCart from "../../hooks/UseCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = UseCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    if(!user){
      Swal.fire({
        title: "Please Login To Order The Food",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
           
          Swal.fire(
            "Please Login First",
            navigate("/login", { state: { from: location } }));
        }
      });
      return
    }
    console.log(item);
    if (user && user.email) {
      const cartItem = {menuItemId: _id, name, image, price, email: user.email}
      fetch("https://bistro-boss-server-ahfahasan786-gmailcom.vercel.app/carts", {
        method: "POST",
        headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(cartItem)
      })


        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Food added on the cart.",
            });
          } 
        });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="text-black mt-6 btn btn-outline bg-slate-100 border-b-4 "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
