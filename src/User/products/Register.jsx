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
import instance from "../products/AxiosInstance/AxiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserToken, setUserId } from "../../Redux/ItemSlice";
import { FormValidation } from "../../Validation";
import { useFormik } from "formik";
import {reg} from "/coding/Projects/frostybytes/src/assets/family.jpg"
import toast from "react-hot-toast";
const initialValues = {
  name: "",
  email: "",
  password: "",
};

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: FormValidation,
    onSubmit: async (values) => {
      console.log(values);
      const { name, email, password } = values;

      const accessKey = process.env.REACT_APP_ACCESS_KEY;

      try {
        const response = await instance.post("/users/register", {
          accessKey,
          username: name,
          email,
          password,
        });
        const { status, data } = response.data;
        if (status === "success") {
          console.log("id", data.userId);
          dispatch(setUserToken(data.token));
          dispatch(setUserId(data.userId));

          toast.success('Registration successful',{
            style:{
              backgroundColor:'green',
              color:'white'

            }
          })
          navigate("/userlogin");
        } else {
          console.error("Registration failed.");
        }
      } catch (error) {
     
        toast.error("Network Error: didn't work.")
      }
    },
  });

  return (
    <>
    <div className="reg_form bg-success" style={{  minHeight: '100vh' }}>
     <MDBContainer className="py-5">
  <MDBCard className="text-black p-4 w-100">
    <MDBCardBody>
      <MDBRow>
        <MDBCol className="order-2 order-lg-1 d-flex flex-column align-items-center">
          <form onSubmit={handleSubmit} className="w-100">
            <h3 className="text-center h1 fw-bold mb-5 mt-4">
              Sign up
            </h3>

            <div className="mb-4">
              <MDBIcon fas icon="user me-3" size="lg" />
              <MDBInput
                className="form-control"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                label="Your Name"
                id="username"
                type="text"
                name="name"
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </div>

            <div className="mb-4">
              <MDBIcon fas icon="envelope me-3" size="lg" />
              <MDBInput
                className="form-control"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                label="Your Email"
                id="email"
                type="email"
                name="email"
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            <div className="mb-4">
              <MDBIcon fas icon="lock me-3" size="lg" />
              <MDBInput
                className="form-control"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                label="Password"
                id="password"
                type="password"
                name="password"
              />
              {errors.password && (
                <small className="text-danger">{errors.password}</small>
              )}
            </div>

            <MDBBtn className="btn-primary mb-4" size="lg" type="submit">
              Register
            </MDBBtn>

            <h5 className="text-center">
              Already registered? <Link to="/userlogin">Click Here</Link>
            </h5>
          </form>
        </MDBCol>

        <MDBCol
          md="10"
          lg="6"
          className="order-1 order-lg-2 d-flex align-items-center"
        >
         <MDBCardImage className="reg_form_image border reg-form-hover" style={{ borderRadius: '0', width: '100vh' }} src="./register.jpg" fluid />

        </MDBCol>
      </MDBRow>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>

    </div>
    </>
  );
}

export default Register;
