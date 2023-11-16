import React from 'react'
import {  setToken } from '../Redux/ItemSlice';
import { useSelector } from 'react-redux';
import { selectToken } from '../Redux/ItemSlice';
import { Link } from 'react-router-dom';
// import AdminSidebar from './AdminSidebar';

function AdminHome() {
  const token = useSelector(selectToken)
  console.log("tken",token);
    console.log(setToken());
  return (
    <div>
      <h1>Admin Home Page</h1>
      <Link className="btn btn-danger shadow w-20" to='/allproducts'>view All Products</Link>
      {/* <AdminSidebar/> */}
    </div>
  )
}

export default AdminHome
