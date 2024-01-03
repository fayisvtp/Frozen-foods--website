import React, { useState } from "react";
import { SelectUserId, selectUserToken } from "../../Redux/ItemSlice";
import { useSelector } from "react-redux";
import instance from "./AxiosInstance/AxiosInstance";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "../../component/Navbar";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Cart() {
  const [quantity,setQuntity]  = useState(1)
  const userId = useSelector(SelectUserId);
  console.log(userId);
  const userToken = useSelector(selectUserToken);
  console.log(userToken);
  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const nav = useNavigate();

  const viewCart = async (userId, token) => {
    try {
      const response = await instance.get(`/users/${userId}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { status, message, data } = response.data;
      console.log("fsdaf", data);
      if (status === "success") {
        setCartItems(data.products || []);
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
      const response = await instance.delete(`/users/${userId}/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.data.status === "success") {
        // Remove the item from the local state
        setCartItems((items) => items.filter((item) => item.id !== id));
        toast.success("Item deleted successfully.");
        nav("/  ");
      } else {
        console.error("Failed to delete item. Message:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const incriment = () => {
    setQuntity(quantity+1)
  }
  const wishliisthandle = async (productId) => {
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
        toast.success("added to wishlist");
        nav("/");
      } else {
        console.error(
          "Product addition to Wishlist failed. Message:",
          response.data.message
        );
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
 


  const calculateCartTotal = () => {
    let total = 0;
  
    cartItems.forEach((value) => {
      value.cart.forEach((item) => {
        total += item.price;
        console.log(total)
      });
    });
  
    return total;
  };
 console.log("cartitems",cartItems)

 
  // ****************************************************

  return (
    <>
      <Navbar />
      <section className="h-100 gradient-custom">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center my-4">
            <MDBCol md="8">
              {cartItems.map((value) => {
                return value.cart.map((item,index) => {
                  return (
                    <MDBCard className="mb-4">
                      <MDBCardHeader className="py-3">
                       
                        <MDBTypography tag="h5" className="mb-0">
                          Cart - 2 items
                        </MDBTypography>
                      </MDBCardHeader>
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                            <MDBRipple
                              rippleTag="div"
                              rippleColor="light"
                              className="bg-image rounded hover-zoom hover-overlay"
                            >
                              <img src={item.image} className="w-100" />
                              <a href="#!">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                                  }}
                                ></div>
                              </a>
                            </MDBRipple>
                          </MDBCol>

                          <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                            <p>
                              <strong>{item.title}</strong>
                            </p>
                            <p>{item.category}</p>
                         
                            <MDBTooltip
                              wrapperProps={{ size: "sm" }}
                              wrapperClass="me-1 mb-2"
                              title="Remove item"
                            >
                             
                              <DeleteIcon
                                onClick={() => removeFromCart(item._id)}
                              />
                            </MDBTooltip>

                            <MDBBtn
  onClick={() => wishliisthandle(item._id)}
  color="link"
  rounded
  size="sm"
>
  <MDBIcon far icon="heart" /> {/* This line adds the heart icon */}
  {/* You can add some space between the icon and text */}
  <span className="ms-2">Save to later</span>
</MDBBtn>

                          </MDBCol>
                          <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              {/* <MDBBtn color="info" size="sm" onClick={() =>}>
                                -
                              </MDBBtn> */}
                              <span className="mx-2">{item.quantity}</span>
                              <MDBBtn color="info" size="sm" onClick={ incriment}>
                                +
                              </MDBBtn>
                            </div>
                            <h4 className="text-start text-md-center">
                              <strong>₹{item.price }</strong>
                              <p> {quantity}</p>
                            </h4>
                          </div>
                        </MDBCol>
                        </MDBRow>

                        <hr className="my-4" />
                      </MDBCardBody>
                    </MDBCard>
                  );
                });
              })}
              {/* <MDBCard className="mb-4">
              <MDBCardBody>
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </MDBCardBody>
            </MDBCard> */}

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody>
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark"
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard className="mb-4">
                <MDBCardHeader>
                  <MDBTypography tag="h5" className="mb-0">
                    Summary
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBListGroup flush>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>
                        
                      </span>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong> {calculateCartTotal()}</strong>
                      </span>
                    </MDBListGroupItem>
                  </MDBListGroup>

                  <MDBBtn block size="lg">
                    Go to checkout
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default Cart;
