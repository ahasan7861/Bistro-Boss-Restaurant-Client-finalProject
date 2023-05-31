// eslint-disable-next-line no-unused-vars
import { useQuery } from "@tanstack/react-query";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://bistro-boss-server-ahfahasan786-gmailcom.vercel.app/users");
    return res.json();
  });



  const handleMakeAdmin =(user) =>{
    fetch(`https://bistro-boss-server-ahfahasan786-gmailcom.vercel.app/users/admin/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: `${user.name} is an Admin Now`,
            });
        }
    })
  }

  const handleDelete = (user) => {

  }


  return (
    <div className=" w-full">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>

      <div className="font-semibold justify-center mb-6 h-[60px] items-center">
      <h3 className="text-3xl font-semibold p-10">Total Users: {users.length}</h3>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>
            Role
        </th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) => <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{
                user.role === 'admin' ? 'admin' : 
                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-blue-600 text-white"><FaUserShield></FaUserShield> </button>
                
            }</td>
            <td><button onClick={() => handleDelete(user)} className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt></FaTrashAlt> </button></td>
          </tr>)
      }
      
      
      
    </tbody>
  </table>
</div>

      </div>
      
    </div>
  );
};

export default AllUsers;
