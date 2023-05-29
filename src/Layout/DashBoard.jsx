// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';

const DashBoard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">

        <Outlet></Outlet>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  text-base-content">

        <li>
            <NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink>
          </li>

        <li>
            <NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart </NavLink>
          </li>
          <div className="divider"></div>

          <li>
            <NavLink to="/"><FaHome></FaHome> Home</NavLink>
            <NavLink to="/menu"><FaHome></FaHome> Our Menu</NavLink>
            <NavLink to="/order/salad"><FaHome></FaHome> Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
