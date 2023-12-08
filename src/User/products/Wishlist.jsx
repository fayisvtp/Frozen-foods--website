import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
  } from "mdb-react-ui-kit";
import Navbar from '../../component/Navbar';
import { useSelector } from 'react-redux';
import { SelectUserId, selectUserToken } from '../../Redux/ItemSlice';

function Wishlist() {
    
    const [wishliistitem,setWishListItem] = useState([])
    const userToken = useSelector(selectUserToken)
    console.log("user token",userToken)
    const userId = useSelector(SelectUserId)
    console.log("userid",userId)


    const viewWishlist = async (userId, token) => {
        try {
          const response = await axios.get(`https://ecommerce-api.bridgeon.in/users/${userId}/wishlist`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const { status, message, data } = response.data;
          if (status === "success") {
            setWishListItem(data.products || []);
          } else {
            console.error("Cart item retrieval failed. Message:", message);
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      };
    
      useEffect(() => {
        viewWishlist(userId, userToken);
      }, [userId, userToken]);

  return (
    <div>
        <Navbar/>
        <MDBContainer fluid className="my-5">
        {wishliistitem.map((value) => (
          <MDBRow key={value._id}>
            {value.Wishlist.map((item) => (
        <MDBCol key={item._id} md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">Today's Combo Offer</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x4</p>
              </div>
            </div>
            <MDBCardImage
              src={item.image}
              position="top"
              alt="Laptop"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
              
                <p className="small text-danger">
                  <s>{item.price}</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">HP Notebook</h5>
                <h5 className="text-dark mb-0">$999</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Available: <span class="fw-bold">6</span>
                </p>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        ))}
      </MDBRow>
      ))}
    </MDBContainer>
    </div>
  )
}

export default Wishlist
