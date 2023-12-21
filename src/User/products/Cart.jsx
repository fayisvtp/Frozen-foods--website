import React, { useState } from "react";
import {
  SelectUserId,
  selectUserToken,
} from "../../Redux/ItemSlice";
import { useSelector } from "react-redux";
import instance from './AxiosInstance/AxiosInstance'
import { useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from "../../component/Navbar";
import {
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialMedia from "../SocialMedia";

function Cart() {
  const userId = useSelector(SelectUserId);
  console.log(userId);
  const userToken = useSelector(selectUserToken);
  console.log(userToken);
  // const [cartItems, setCartItems] = useState([]);
  const[cartItems,setCartItems] = useState([])
  const nav = useNavigate()
  const viewCart = async (userId, token) => {
    try {
      const response = await instance.get( `/users/${userId}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { status, message, data } = response.data;
      console.log("fsdaf",data)
      if (status === "success") {
        setCartItems(data.products|| []);
      } else {
        console.error("Cart item retrieval failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    viewCart(userId, userToken);
  }, [userId, userToken]);

  const removeFromCart = async (id) => {
    try {
      const response = await instance.delete(
        `/users/${userId}/cart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
  
      if (response.data.status === 'success') {
        // Remove the item from the local state
        setCartItems((items) => items.filter((item) => item.id !== id));
        toast.success('Item deleted successfully.')
        nav("/")
      } 
      
      else {
        console.error('Failed to delete item. Message:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  const wishliisthandle = async (productId)=>{
    try {
      console.log("Adding product to wishlist...");
      console.log("Product ID:", productId);
      console.log("User ID:", userId);
      console.log("User Token:", userToken);

      const response = await instance.post(
        `/users/${userId}/wishlist/${productId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (response.data.status === "success") {
        toast.success("added to wishlist")
        nav("/")
 
      } else {
        console.error(
          "Product addition to Wishlist failed. Message:",
          response.data.message
        );
      }
    } catch (error) {
      console.error("Error:", error.message);
      
    }
  }

  // ****************************************************

  return (
    <>
      <Navbar />
      <div className="cart-LIst" style={{ backgroundImage: 'linear-gradient(to right top, #875800, #723a16, #52251c, #2d1517, #000000)' }}>
  <h1 className="text-center text-danger" style={{ fontSize: '20vh' }}>Cart </h1>
  <MDBTable align="middle" style={{ backgroundColor: 'transparent' }}>
    <div className=""></div>
    <MDBTableBody>
      {cartItems.map((value) => {
        return value.cart.map((item) => {
          return (
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1"> {item.title}</p>
                  </div>
                </div>
              </td>
              <td> <h5> ₹{item.price}  </h5> </td>
              <td>
                <MDBBtn onClick={() => removeFromCart(item._id)} color="link" rounded size="sm">
                  <DeleteIcon /> {/* Replace 'Remove' text with DeleteIcon */}
                </MDBBtn>
              </td>
              <td>
                <MDBBtn
                  onClick={() => wishliisthandle(item._id)}
                  color="link" rounded size="sm">
                  save to later
                </MDBBtn>
              </td>
            </tr>
          );
        })
      })}
    </MDBTableBody>
  </MDBTable>
  <div className="col-6 ">

  </div>
  <SocialMedia/>
</div>
    </>
  );
}

export default Cart;

 