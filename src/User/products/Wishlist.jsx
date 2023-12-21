import React from 'react'
import { useState , useEffect } from 'react';
import instance from './AxiosInstance/AxiosInstance';
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
import SocialMedia from '../SocialMedia';

function Wishlist() {
    
    const [wishliistitem,setWishListItem] = useState([])
    const userToken = useSelector(selectUserToken)
    console.log("user token",userToken)
    const userId = useSelector(SelectUserId)
    console.log("userid",userId)


    const viewWishlist = async (userId, token) => {
        try {
          const response = await instance.get(`/users/${userId}/wishlist`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const { status, message, data } = response.data;
          if (status === "success") {
            setWishListItem(data.products || []);
            console.log("abcc",data)
          }
          else {
            console.error("wish item retrieval failed. Message:", message);
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      };
    
      useEffect(() => {
        viewWishlist(userId, userToken);
      }, [userId, userToken]);

      const deleteItem = async (id) => {
        try {
          
          
            const response = await instance.delete(
              `/users/${userId}/wishlist/${id}`,
              {
                headers: {
                  Authorization: `Bearer ${userToken}`,
                },
              }
            );
    
            if (response.data.status === "success") {
            
              console.log("Item deleted successfully.");
              window.location.reload();
            } else {
              console.error(
                "Failed to delete item. Message:",
                response.data.message
              );
            
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      };

  return (
    <>
<div className="wish_list_session" style={{ backgroundImage: 'linear-gradient(to right top, #e10000, #ac001e, #740522, #3c0f1a, #000000)' }}>
        <Navbar/>
        <h1 className="text-center text-light" style={{fontSize:'20vh'}}>Wish List </h1>
        <MDBContainer fluid className="my-5 p-4">
        {wishliistitem.map((value) => (
         
          <MDBRow key={value._id}>
          {value.wishlist.map((item) => (
        <MDBCol  md="12" lg="4" className="mb-4 mb-lg-0 p-3">
          <MDBCard>
            {/* <div className="d-flex justify-content-between p-3">
             
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">x4</p>
              </div>
            </div> */}
            <MDBCardImage
              src={item.image}
              position="top"
              alt="Laptop"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
              
              
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{item.title}</h5>
                <h5 className="text-dark mb-0">₹{item.price}</h5>
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
              <div onClick={()=>deleteItem (item._id)} className="btn btn-danger shadow">delete</div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        ))}
      </MDBRow>
      ))}
    </MDBContainer>
    <SocialMedia/>
    </div>
    </>
  )
}

export default Wishlist
