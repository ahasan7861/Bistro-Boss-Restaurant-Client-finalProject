// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {  FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from "../../../Providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/secrate">Secrate</Link>
      </li>
      <li>
        <Link to="/">
          <button className="btn btn-active btn-ghost gap-2">
          
          <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+0</div>
          </button>
        </Link>
      </li>

      
      {/* <li><Link to="/login">Login</Link></li> */}

      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-active btn-ghost">
            Logout
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navOptions}
            </ul>
          </div>

          <div>
            <a className="btn btn-ghost normal-case text-2xl">BISTRO BOSS</a>{" "}
            <br />
            <p className="text-base ml-4">RESTAURANT</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <p>
            {user && (
              <span className="text-xl mr-3 ">
                {" "}
                <span className="mr-1 font-bold">
                  Welcome <br />
                </span>
                {user.displayName}
              </span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
