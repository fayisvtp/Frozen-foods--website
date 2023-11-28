import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios'
import { SelectUderId, selectProduct, selectToken, selectUserToken, setProducts } from '../Redux/ItemSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {  MDBCol,  MDBCardBody, MDBRipple, MDBCardImage, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 
import './products/ProductDetails.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

function ProductDetails() {

  const token = useSelector(selectToken);
  const dispatch=useDispatch()
  const products = useSelector(selectProduct);
  const [updatedProductData, setUpdatedProductData] = useState(null);
  const {id} = useParams()
  console.log(id);
  const dealerToken = token;
  const userId=useSelector(SelectUderId)
  const userToken=useSelector(selectUserToken)

  
  const getAllProducts = async (token) => {
    try {
      const response = await axios.get(
        "https://ecommerce-api.bridgeon.in/products?accessKey=e750a4e245dc6f3f299a",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { status, message, data } = response.data;
      if (status === "success") { 
        // Successfully fetched products.
        dispatch(setProducts(data)); // Use setProductsAction instead of setProducts
        console.log("Fetched products:", data);
      } else {
        console.error("Product retrieval failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  useEffect(() => {
    getAllProducts(dealerToken);
  }, [updatedProductData]);
  //Code for filtering the product using ID
  const data =products.filter((item) => item._id=== id)
  console.log(data);

// *******************************************************************

  return (
    
    <MDBCol  className='col-12 align-item-center p-5 m-auto'>
      {data.map ((item)=>(
     <div key={item._id} className=" col-8 shadow-0 border rounded-3 mt-5 mb-3">
      <MDBCardBody>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image rounded hover-zoom hover-overlay"
        >
          <img
            src={item.image}
            fluid
            className=" card shadow w-10px"
            style={{borderRadius:'0', width:'500px'}}
          />
       
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
      
        </MDBRipple>
        <h5></h5>
        <div className="d-flex flex-row">
          <div className="text-danger mb-1 me-2">
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
          </div>
          <span></span>
        </div>
        <div className="mt-1 mb-0 text-muted small">
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
        </div>
        <p className="text mb-4 mb-md-0">
          {item.description}
        </p>
        <div className="d-flex flex-row  mb-1">
          <h4 className="mb-1 me-1"></h4>
          <span className="text-danger">
            <s></s>
          </span>
        </div>
        <h6 className="text-success"></h6>
        <div className="d-flex flex-row  mt-4">
          
        <Link to='/cart' color="primary" size="small" className="mt-2 text-danger">
  <ShoppingCartIcon />
</Link>
          <Link to="/wishliist" color="primary" size="small" className="mt-2 text-success">
  <FavoriteIcon />
</Link>
        </div>
      </MDBCardBody>
    </div>
    ))}
  </MDBCol>

  )
}

export default ProductDetails
