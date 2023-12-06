import React, { useState } from "react";
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserToken} from "../Redux/ItemSlice";
import {setUserId} from "../Redux/ItemSlice"

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

   const accessKey="e750a4e245dc6f3f299a"
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
      const response = await axios.post(
        "https://ecommerce-api.bridgeon.in/login",
        {
          email,
          password,
        }
      );
      const { status, message, data } = response.data;
      console.log(response.data);
      if (status === "success") {
      

       
        
        navigate("/allproduct");
      } else {
        console.error("Login failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
    }

  const loginUser = async (accessKey,email,password) => {

   
    try {
      const response = await axios.post('https://ecommerce-api.bridgeon.in/users/login', {
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
        alert('Login Successfull')
      } else {
        alert('Login Fail')
        console.error('Login failed. Message:', message);
        alert('Login Fail')
      }
    } catch (error) {
      alert('Login Failed, Please check Your UserName and password')
      console.error(`token${accessKey}`, error.message);
    }
  }

// *****************************************************************************************************

  return (
    <div>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <form onSubmit={toLogin}>
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="email"
          type="email"
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="password"
          type="password"
        />

     

        <MDBBtn type="submit" className="mb-4">Sign in</MDBBtn>

        <div className="text-center">
          <p>
            Not a member? 
            <Link to='/register'>Register</Link> 
          </p>
         
        </div>
        </form>
      </MDBContainer>
    </div>
  );
}

export default UserLogin;
