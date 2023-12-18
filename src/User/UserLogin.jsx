import React, { useState } from "react";
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
    MDBCardImage
  }
  from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import instance from "./products/AxiosInstance/AxiosInstance";
import { setUserToken} from "../Redux/ItemSlice";
import {setUserId,setToken,setAdmin} from "../Redux/ItemSlice"
import toast from "react-hot-toast";

function UserLogin() {

    // const isSignIn = useSelector((state)=> state.product.isSignIn)

    const [state,setstate] = useState("")
    const [name,setName] = useState("")
    const dispatch = useDispatch ()
    const navigate = useNavigate()
    
    const toLogin = (event) =>{
        const email = event.target.email.value
        const password = event.target.password.value
        const isAdmin = email ==="vtpfayis@gmail.com"
        event.preventDefault();
        const apiKey = process.env.REACT_APP_ACCESS_KEY 
   const accessKey=apiKey;
  if(isAdmin){
    handleLogin(event)
  }
  else{
    loginUser(accessKey,email,password)
  }     
    }
    const handleLogin = async (event) => {
      event.preventDefault();
      const email = event.target.email.value
      const password = event.target.password.value
      setstate([...state,{email: email, password:password}])
     
      
    try {
      const response = await instance.post(
        "/login",
        {
          email,
          password,
        }
      );
      console.log("resss",response)
      const { status, message, data } = response.data;
      console.log(response.data);
      const token = data.token
      if (status === "success") {
        dispatch(setToken(token));
        dispatch(setAdmin(true));
        navigate("/allproducts");
      } else {
        console.error("Login failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
    }

  const loginUser = async (accessKey,email,password) => {

   
    try {
      const response = await instance.post('/users/login', {
        accessKey,
        email,
        password,
      }
        );
        const { status, message, data } = response.data;

      if (status === 'success') {
       

        const token = data.token;
        const userId = data.userId;
        dispatch(setUserToken(token)); 
        dispatch(setUserId(userId)); 
    

        console.log('Login successful. Token:', token);
        navigate('/product1')
        // alert('Login Successfull')
        toast.success('Welcome to frostybytes.', {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
            height:'20vh',
            backgroundColor:'#618264'
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        });
      } else {
        alert('Login Fail')
        console.error('Login failed. Message:', message);
        alert('Login Fail')
      }
    } catch (error) {
      toast.error('Login Failed, Please check Your UserName and password')
      console.error(`token${accessKey}`, error.message);
    }
  }
 
// *****************************************************************************************************

  return (
    <>    
    <div className="user_login_page bg-dark d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <MDBContainer className="p-4 my-4 d-flex flex-column align-items-center w-100">
        <form onSubmit={toLogin} className="w-100">
          <MDBInput
            wrapperClass="mb-4 w-100"
            label="Email address"
            id="email"
            type="email"
            
          />
          <MDBInput
            wrapperClass="mb-4 w-100"
            label="Password"
            id="password"
            type="password"
          />

          <MDBBtn type="submit" className="mb-4 w-100">Sign in</MDBBtn>

          <div className="text-center">
            <p className="notamembar text-white mb-0">
              Not a member?
              <Link to='/register' className="ml-1">Register</Link>
            </p>
          </div>
        </form>
      <MDBCardImage className="login_page mr-4 border reg-form-hover" style={{ borderRadius: '0', width: '70vh' }} src="./register.jpg" fluid  />
      </MDBContainer>
    </div>
    </>

  );
}

export default UserLogin;



