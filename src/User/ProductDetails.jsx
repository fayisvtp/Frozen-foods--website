import React from "react";

import { useState, useEffect } from "react";
import axios from "./products/AxiosInstance/AxiosInstance";
import { SelectUserId, selectToken, selectUserToken } from "../Redux/ItemSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MDBCol, MDBCardBody, MDBRipple, MDBIcon } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./products/ProductDetails.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Navbar from "../component/Navbar";
import toast from "react-hot-toast";
import SocialMedia from "./SocialMedia";

function ProductDetails() {
  const { id } = useParams();
  const [productDetail, setProductDetails] = useState({});
  const token = useSelector(selectToken);

  // const allproducts = useSelector(selectProduct);
  const userId = useSelector(SelectUserId);

  const userToken = useSelector(selectUserToken);

  const apiKey = process.env.REACT_APP_ACCESS_KEY;

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await axios.get(
          `/products/${id}?accessKey=${apiKey}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { status, message, data } = response.data;
        if (status === "success") {
          // Successfully fetched the product.
          console.log("Fetched product details:", data);
          setProductDetails(data);
        } else {
          console.error("Product retrieval failed. Message:", message);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    getProductDetails();
  }, [id, token, apiKey]);

  const handleCart = async (productId, title) => {
    try {
      console.log("Product ID:", productId);
      console.log("User ID:", userId);
      console.log("User Token:", userToken);

      const response = await axios.post(
        `/users/${userId}/cart/${productId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (response.data.status === "success") {
        toast.success(`${title}added to cart`);
      } else {
        toast.error("This didn't work.");
        console.error(
          "Product addition to cart failed. Message:",
          response.data.message
        );
      }
    } catch (error) {
      toast.error("Already Added.");
    }
  };

  const gradientStyle = {
    backgroundImage: 'linear-gradient(to left bottom, #ffc436, #ffcf5f, #ffd983, #ffe3a6, #ffedc8, #f4ddc7, #e2cfc5, #cbc3c1, #a39c9d, #7b767a, #545357, #313336)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    textDecoration: 'underline'
    // Bootstrap text-center equivalent
  };
  // *******************************************************************

  return (
    <>
      <Navbar />
      
      <div
        className="product_details col-12"
        style={{
          backgroundImage:
            "linear-gradient(to right top, #0b3871, #1b4580, #27538f, #33619e, #3f6fad, #426ea7, #456ea2, #486d9c, #435e81, #3e4f67, #38414e, #313336)",
        }}
      >
    <h1 className="text-center" style={gradientStyle}>
      Product Details
    </h1>
        <MDBCol className="col-12 align-item-center p-5 m-auto">
          <div
            key={productDetail._id}
            className="row shadow-0 border rounded-3 mt-5 mb-3"
          >
            <div className="col-md-6 p-0">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom hover-overlay"
              >
                <img
                  src={productDetail.image}
                  fluid
                  className="card shadow w-100"
                  style={{ borderRadius: "0" }}
                />
                <div
                  className="mask"
                  // style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </MDBRipple>
            </div>
            <div className="col-md-6 p-3">
              <MDBCardBody>
                <div className="item-color-light">
                  
                    <h1 className="text-white">{productDetail.title}</h1>
                    <h2 className="text-white">₹{productDetail.price}</h2>
                  </div>
              
                <div className="d-flex flex-row">
                  <div className="text-danger mb-1 me-2">
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                  </div>
                  <span></span>
                </div>
                <p className="text mb-4 mb-md-0" style={{ color: '#FFC436' }}>{productDetail.description}</p>

                <div className="d-flex flex-row  mb-1">
                  <h4 className="mb-1 me-1"></h4>
                  <span className="text-danger">
                    <s></s>
                  </span>
                </div>
                <h6 className="text-success"></h6>
                <div className="d-flex flex-row  mt-4">
                  <IconButton
                    onClick={() =>
                      handleCart(productDetail._id, productDetail.title)
                    }
                    color="primary"
                    size="small"
                    className="mt-2 text-danger"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </div>
              </MDBCardBody>
            </div>
          </div>
        </MDBCol>
      <SocialMedia/>
      </div>
    </>
  );
}

export default ProductDetails;
