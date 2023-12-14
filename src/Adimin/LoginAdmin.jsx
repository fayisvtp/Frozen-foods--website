import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
// import "./LoginAdmin.css";
import instance from "../User/products/AxiosInstance/AxiosInstance";
import {  Link, useNavigate } from "react-router-dom";
import { useDispatch, } from "react-redux";
import { setToken } from "../Redux/ItemSlice";
// import { Link } from "react-router-dom";


function LoginAdmin() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async (event) => {
    event.preventDefault();
    console.log("Login function called");
  
    const email = event.target.form1.value;
    const password = event.target.form2.value;
  
    try {
      const response = await instance.post("/login", { email, password });
  
      if (response.status === 200) {
        console.log("New Token", response.data.data.token);
        dispatch(setToken(response.data.data.token));
        navigate('/allproducts');
      } else {
        console.error("Login failed. Message:", response.data.data.message);
      }
  
      console.log("Response", response);
    } catch (err) {
      console.error("Error:", err.message);
    }
  };
  

  return (
    <MDBContainer fluid>
      <form onSubmit={login} >
      <MDBRow className="d-flex justify-content-center align-items-center h-100 ">
        <MDBCol col="12 ">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto "
            style={{ borderRadius: "1rem" }}
          >
            <MDBCardBody className=" d-flex flex-column align-items-center mx-auto w-1000">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Email address"
                id="form1"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="form2"
                type="password"
                size="lg"
              />

              {/* <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">
              Forgot password?</a></p> */}
              <MDBBtn type="submit" outline className="mx-2 px-5" color="white" size="lg">
  Login
</MDBBtn>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </form>
    </MDBContainer>
  );
}

export default LoginAdmin;



