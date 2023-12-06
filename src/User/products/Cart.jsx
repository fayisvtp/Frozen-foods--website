import React, { useState } from "react";
import {
  SelectUserId,
  selectUserToken,
} from "../../Redux/ItemSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

import Navbar from "../../component/Navbar";
import {
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

function Cart() {
  const userId = useSelector(SelectUserId);
  console.log(userId);
  const userToken = useSelector(selectUserToken);
  console.log(userToken);
  const [cartItems, setCartItems] = useState([]);

  const viewCart = async (userId, token) => {
    try {
      const response = await axios.get( `https://ecommerce-api.bridgeon.in/users/${userId}/cart`, {
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

  
  

  // ****************************************************

  return (
    <>
      <Navbar />
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">catogery </th>
            <th>Price</th>
            {/* <th>Quantity</th>
            <th>Total</th> */}
            <th>Action</th>
          </tr>
        </MDBTableHead>
        
        <MDBTableBody>
       {cartItems.map ((value)=>{
        return value.cart.map((item)=>{
            return(
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
            <td>
              <p className="fw-normal mb-1">{item.Category}</p>
            </td>
            <td>{item.price}</td>
            <td>
              <MDBBtn color="link" rounded size="sm">
                Delete
              </MDBBtn>
            </td>
          </tr>      
        )})
       })}
        </MDBTableBody>
      </MDBTable>
    </>
  );
}

export default Cart;

{
  /* <div className="d-flex-col container">
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Image</th>
      <th>Title</th>
      <th>Category</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {cartItems.map((item) => (
      <tr key={item._id}>
        <td>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "50px" }}
          />
        </td>
        <td>{item.title}</td>
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td>
          <Button className="m-1" variant="outline-primary" fds>
            -
          </Button>
          {item.qty}
          <Button das className="m-1" variant="outline-primary">
            +
          </Button>
        </td>

        <td>
          <Button
            onClick={() => removeFromCart(item._id)}
            className="ms-3"
            variant="outline-danger"
          >
            Remove
          </Button>
        </td>
      </tr>
    ))}
  </tbody>
</Table>
</div> */
}
