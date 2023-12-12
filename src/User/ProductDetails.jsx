import React from 'react'

import { useState,useEffect } from 'react';
import axios from "./products/AxiosInstance/AxiosInstance"
import { SelectUserId, selectProduct, selectToken, selectUserToken, } from '../Redux/ItemSlice';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  MDBCol,  MDBCardBody, MDBRipple, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 
import './products/ProductDetails.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Navbar from '../component/Navbar';

function ProductDetails() {

  const {id} = useParams()
  const [productDetail,setProductDetails] = useState({})
  const token = useSelector(selectToken)
  console.log("tokdddden",token)
  const allproducts = useSelector (selectProduct)
  const userId = useSelector (SelectUserId)
  console.log("userId",userId);
  const userToken = useSelector (selectUserToken)
  console.log("user token",userToken);
  const apiKey = process.env.REACT_APP_ACCESS_KEY 
  useEffect(() => {
    getProductById(id, token, allproducts);
  }, [id, token, allproducts]);
  
  const getProductById = async (id, token, allProducts) => {
    const product = allProducts.find((product) => product._id === id);

    if (product) {
      // If the product is found in the Redux store, set the details
      setProductDetails(product);
    } else {
      // If the product is not found in the Redux store, make an API call to get it
      try {
        const response = await axios.get(`/products/${userId}?accessKey=${apiKey}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { status, message, data } = response.data;
        if (status === 'success') {
          // Successfully fetched the product.
          console.log('Fetched product details:', data);
          setProductDetails(data);
        } else {
          console.error('Product retrieval failed. Message:', message);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };


  const handleCart = async (productId) => {
    try {
      console.log("Adding product to cart...");
      console.log("Product ID:", productId);
      console.log("User ID:", userId);
      console.log("User Token:", userToken);
  
      const response = await axios.post(
        `/users/${userId}/cart/${productId}`,
        null, // Assuming no data payload, pass null if not needed
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
  
  // Log the response from the server
  
      if (response.data.status === 'success') {
        console.log('Product added to cart.');
        alert.success("product added to cart  succussfully")
      } else {
        console.error('Product addition to cart failed. Message:', response.data.message);
      }
    } catch (error) {
      console.error('error');
    }
  };


// *******************************************************************

  return (
    <>
    <Navbar/>
    <MDBCol  className='col-12 align-item-center p-5 m-auto'>
      
     <div key={productDetail._id} className=" col-8 shadow-0 border rounded-3 mt-5 mb-3">
      <MDBCardBody>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image rounded hover-zoom hover-overlay"
        >
          <img
            src={productDetail.image}
            fluid
            className=" card shadow w-10px"
            style={{borderRadius:'0', width:'500px'}}
          />
       
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
      
        </MDBRipple>
        <h1>{productDetail.title}</h1>
        <h2>₹{productDetail.price}</h2>
        <div className="d-flex flex-row">
          <div className="text-danger mb-1 me-2">
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
          </div>
          <span></span>
        </div>
        {/* <div className="mt-1 mb-0 text-muted small">
          <span></span>
          <span className="text-primary"> • </span>
          <span></span>
          <span className="text-primary"> • </span>
          <span></span>
          <br />
        </div>
        <div className="mb-2 text-muted small">
          <span></span>
          <span className="text-primary"> • </span>
          <span></span>
          <span className="text-primary"> • </span>
          <span></span>
          <br />
        </div> */}
        <p className="text mb-4 mb-md-0">
          {productDetail.description}
        </p>
        <div className="d-flex flex-row  mb-1">
          <h4 className="mb-1 me-1"></h4>
          <span className="text-danger">
            <s></s>
          </span>
        </div>
        <h6 className="text-success"></h6>
        <div className="d-flex flex-row  mt-4">
          
        <IconButton  onClick={()=>  handleCart(productDetail._id)} color="primary" size="small" className="mt-2 text-danger">
  <ShoppingCartIcon />
</IconButton >
          <IconButton  to="/wishliist" color="primary" size="small" className="mt-2 text-success">
  <FavoriteIcon />
</IconButton >
        </div>
      </MDBCardBody>
    </div>
    
  </MDBCol>
  </>
  )
}

export default ProductDetails




  