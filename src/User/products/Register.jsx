import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../Redux/ItemSlice";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUser = async (accessKey, username, email, password) => {
    try {
      const response = await axios.post(
        "https://ecommerce-api.bridgeon.in/users/register",
        {
          accessKey,
          username,
          email,
          password,
        }
      );
      const { status, message, data } = response.data;
      if (status === "success") {
        dispatch(setUserToken(data.token));
        navigate("/userLogin");

        console.log("Registration successful. Token:", data.token);
      } else {
        console.error("Registration failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    registerUser("e750a4e245dc6f3f299a", username, email, password);
  };

  return (
    <div>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <form onSubmit={handleRegistration}>
                  <h3 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </h3>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="Your Name" id="username" type="text"className="w-100" />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput label="Your Email" id="email" type="email" />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput label="Password" id="password" type="password" />
                  </div>

                 
              
                  <MDBBtn className="mb-4" size="lg" type = "submit">
                    Register
                  </MDBBtn>
                  
                  <h5>
                    Aleady registered?{" "}
                    <Link to={"/userlogin"}>Click Here</Link>
                  </h5>
                </form>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage src="./register.jpg" fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Register;
