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
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { useDispatch, } from "react-redux";
import { setToken } from "../Redux/ItemSlice";
// import { Link } from "react-router-dom";


function LoginAdmin() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

const login = async (event) =>{
 event.preventDefault()
 const email = event.target.form1.value
 console.log(email);
 const password = event.target.form2.value
 console.log(password);

 try{
  const response = await axios.post(
   " https://ecommerce-api.bridgeon.in/login",{
      email,
      password,

   }
   )

  console.log("Response",response,);
  const {status,message,data} = response.data
  if (status === 'success') {
    const token = data.token;
    dispatch(setToken(token))
  
    console.log('Login successful. Token:', token);
    navigate('/adminhome')
    
 
  } else {
    console.error('Login failed. Message:', message);
  }
} catch (error) {
  console.error('Error:', error.message);
}
 }

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
              {/* <Link to="/adminhome"> */}
              <MDBBtn type=""  outline className="mx-2 px-5" color="white" size="lg">
                Login
              </MDBBtn>
              {/* </Link> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </form>
    </MDBContainer>
  );
}

export default LoginAdmin;



