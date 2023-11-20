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


function UserLogin() {

    const isSignIn = useSelector((state)=> state.product.isSignIn)

    const [state,setstate] = useState("")
    const [name,setName] = useState("")
    const dispatch = useDispatch ()
    const navigate = useNavigate()

    

  return (
    <div>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="form1"
          type="email"
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
        />

     

        <MDBBtn className="mb-4">Sign in</MDBBtn>

        <div className="text-center">
          <p>
            Not a member? 
            <Link to='/register'>Register</Link> 
          </p>
         
        </div>
      </MDBContainer>
    </div>
  );
}

export default UserLogin;
