import React, { useState } from "react";
import { MDBContainer, MDBInput, MDBBtn, MDBCardImage } from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import instance from "./products/AxiosInstance/AxiosInstance";
import { setUserToken, setUserId, setAdmin, setToken } from "../Redux/ItemSlice";
import toast from "react-hot-toast";
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";

function UserLogin() {
  const [state, setstate] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toLogin = (event) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    const isAdmin = email === "vtpfayis@gmail.com";
    event.preventDefault();
    const apiKey = process.env.REACT_APP_ACCESS_KEY;
    const accessKey = apiKey;
    if (isAdmin) {
      handleLogin(event);
    } else {
      loginUser(accessKey, email, password);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setstate([...state, { email: email, password: password }]);

    try {
      const response = await instance.post("/login", {
        email,
        password,
      });
      const { status, message, data } = response.data;
      const token = data.token;
      if (status === "success") {
        dispatch(setToken(token));
        dispatch(setAdmin(true));
        navigate("/adminhome");
      } else {
        console.error("Login failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const loginUser = async (accessKey, email, password) => {
    try {
      const response = await instance.post('/users/login', {
        accessKey,
        email,
        password,
      });
      const { status, message, data } = response.data;

      if (status === 'success') {
        const token = data.token;
        const userId = data.userId;
        dispatch(setUserToken(token));
        dispatch(setUserId(userId));

        console.log('Login successful. Token:', token);
        navigate('/product1');
        toast.success('Welcome to frostybytes.', {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
            height: '20vh',
            backgroundColor: '#618264'
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        });
      } else {
        alert('Login Fail');
        console.error('Login failed. Message:', message);
      }
    } catch (error) {
      toast.error('Login Failed, Please check Your UserName and password');
      console.error(`token${accessKey}`, error.message);
    }
  };

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
              <GoogleLogin
              
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                  const decode = jwtDecode(credentialResponse.credential);
                  // const mail = decode.email
                  // const password  = decode.sub
                 
                  const googleToken = decode.token;
                  const userId = decode.userId;

                  // Dispatch actions to update Redux store with Google OAuth login details
                  dispatch(setUserToken(googleToken));
                  dispatch(setUserId(userId));

                  console.log('Google OAuth Login successful. Token:', googleToken);
                  navigate('/');
                  toast.success('Welcome to frostybytes.', {
                    style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: '#713200',
                      height: '20vh',
                      backgroundColor: '#618264',
                    },
                    iconTheme: {
                      primary: '#713200',
                      secondary: '#FFFAEE',
                    },
                  });
                }}
                onError={() => {
                  console.log('Google Login Failed');
                }}
              />
            </div>

            <div className="text-center">
              <p className="notamembar text-white mb-0">
                Not a member?
                <Link to='/register' className="ml-1">Register</Link>
              </p>
              <p className="notamembar text-white mb-0">
                forgot password ?
                <Link to='/resetpassword' className="ml-1">Reset</Link>
              </p>
            </div>
          </form>
          <MDBCardImage className="login_page mr-4 border reg-form-hover" style={{ borderRadius: '0', width: '70vh' }} src="./register.jpg" fluid />
        </MDBContainer>
      </div>
    </>
  );
}

export default UserLogin;




// import React, { useState } from "react";
// import {
//     MDBContainer,
//     MDBInput,
//     MDBBtn,
//     MDBCardImage
//   }
//   from 'mdb-react-ui-kit';
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import instance from "./products/AxiosInstance/AxiosInstance";
// import { setUserToken} from "../Redux/ItemSlice"; 
// import {setUserId,setToken,setAdmin} from "../Redux/ItemSlice"
// import toast from "react-hot-toast";
// import { GoogleLogin } from '@react-oauth/google';
// import {jwtDecode} from "jwt-decode";


// function UserLogin() {

//     // const isSignIn = useSelector((state)=> state.product.isSignIn)

//     const [state,setstate] = useState("")
//     // const [name,setName] = useState("")
//     const dispatch = useDispatch ()
//     const navigate = useNavigate()
    
//     const toLogin = (event) =>{
//         const email = event.target.email.value
//         const password = event.target.password.value
//         const isAdmin = email ==="vtpfayis@gmail.com"
//         event.preventDefault();
//         const apiKey = process.env.REACT_APP_ACCESS_KEY 
//    const accessKey=apiKey;
//   if(isAdmin){
//     handleLogin(event)
//   }
//   else{
//     loginUser(accessKey,email,password)
//   }     
//     }
//     const handleLogin = async (event) => {
//       event.preventDefault();
//       const email = event.target.email.value
//       const password = event.target.password.value
//       setstate([...state,{email: email, password:password}])
     
      
//     try {
//       const response = await instance.post(
//         "/login",
//         {
//           email,
//           password,
//         }
//       );
//       console.log("resss",response)
//       const { status, message, data } = response.data;
//       console.log(response.data);
//       const token = data.token
//       if (status === "success") {
      

//         dispatch(setToken(token));
//         dispatch(setAdmin(true));
//         navigate("/adminhome");
//       } else {
//         console.error("Login failed. Message:", message);
//       }
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//     }
//                                                          // user login


//   const loginUser = async (accessKey,email,password) => {

   
//     try {
//       const response = await instance.post('/users/login', {
//         accessKey,
//         email,
//         password,
//       }
//         );
//         const { status, message, data } = response.data;

//       if (status === 'success') {
       

//         const token = data.token;
//         const userId = data.userId;
//         dispatch(setUserToken(token)); 
//         dispatch(setUserId(userId)); 
    

//         console.log('Login successful. Token:', token);
//         navigate('/product1')
//         // alert('Login Successfull')
//         toast.success('Welcome to frostybytes.', {
//           style: {
//             border: '1px solid #713200',
//             padding: '16px',
//             color: '#713200',
//             height:'20vh',
//             backgroundColor:'#618264'
//           },
//           iconTheme: {
//             primary: '#713200',
//             secondary: '#FFFAEE',
//           },
//         });
//       } else {
//         alert('Login Fail')
//         console.error('Login failed. Message:', message);
//         alert('Login Fail')
//       }
//     } catch (error) {
//       toast.error('Login Failed, Please check Your UserName and password')
//       console.error(`token${accessKey}`, error.message);
//     }
//   }
//   // const onSuccess = async (res) => {
//   //   const decoded = jwtDecode(res.credential);
//   //   setAccount(decoded);
//   //   await addUser(decoded);
//   // };
 
// // *****************************************************************************************************

//   return (
//     <>    
//     <div className="user_login_page bg-dark d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
//       <MDBContainer className="p-4 my-4 d-flex flex-column align-items-center w-100">
//         <form onSubmit={toLogin} className="w-100">
//           <MDBInput
//             wrapperClass="mb-4 w-100"
//             label="Email address"
//             id="email"
//             type="email"
            
//           />
//           <MDBInput
//             wrapperClass="mb-4 w-100"
//             label="Password"
//             id="password"
//             type="password"
//           />

//           <MDBBtn type="submit" className="mb-4 w-100">Sign in</MDBBtn>
          
//           <div className="text-center" >
//           <GoogleLogin
  
//   onSuccess={credentialResponse => {
//     console.log(credentialResponse);
//    const decode = jwtDecode(credentialResponse.credential) 
//    console.log(decode)
//     navigate("/")
//   }}
//   onError={() => {
//     console.log('Login Failed');
//   }}
// />;
//           </div>
         

//           <div className="text-center">
//             <p className="notamembar text-white mb-0">
//               Not a member?
//               <Link to='/register' className="ml-1">Register</Link>
//             </p>
//           </div>
//         </form>
//       <MDBCardImage className="login_page mr-4 border reg-form-hover" style={{ borderRadius: '0', width: '70vh' }} src="./register.jpg" fluid  />
//       </MDBContainer>
//     </div>
//     </>

//   );
// }

// export default UserLogin;




















// formik and yup

// import React, { useState } from "react";
// import {
//     MDBContainer,
//     MDBInput,
//     MDBBtn,
//     MDBCardImage
//   }
//   from 'mdb-react-ui-kit';
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import instance from "./products/AxiosInstance/AxiosInstance";
// import { setUserToken} from "../Redux/ItemSlice";
// import {setUserId,setToken,setAdmin} from "../Redux/ItemSlice"
// import toast from "react-hot-toast";
// import { useFormik } from "formik";
// import { FormValidation } from "../Validation";

// const initialValues = {
//   email: '',
//   password: ''
// }

// function UserLogin() {
//   const navigate = useNavigate()
  
//   const {values,handleBlur,handleSubmit,handleChange,errors}=useFormik({
//     initialValues:initialValues,
//     validationSchema:FormValidation,
//   onSubmit: (values)=>{
//       toLogin(values)

//   },
//   })
//   const accessKey = process.env.REACT_APP_ACCESS_KEY 
  
//   const [state,setstate] = useState("")
//   // const [name,setName] = useState("")
//   const dispatch = useDispatch ()
  

//     const toLogin = (values) =>{
//       const {email,password} = values
//         const isAdmin = email ==="vtpfayis@gmail.com"
       

//   if(isAdmin){
//     handleLogin(email,password)
//   }
//   else{
//     loginUser(accessKey,email,password)
//   }     
//     };

//     const handleLogin = async (email,password) => {
      
//       setstate([...state,{email: email, password:password}])
     
      
//     try {
//       const response = await instance.post(
//         "/login",
//         {
//           email,
//           password,
//         }
//       );
//       console.log("resss",response)
//       const { status, message, data } = response.data;
//       console.log(response.data);
//       const token = data.token
//       if (status === "success") {
//         dispatch(setToken(token));
//         dispatch(setAdmin(true));
//         navigate("/adminhome");
//       } else {
//         console.error("Login failed. Message:", message);
//       }
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//     }

//   const loginUser = async (accessKey,email,password) => {

   
//     try {
//       const response = await instance.post('/users/login', {
//         accessKey,
//         email,
//         password,
//       }
//         );
//         const { status, message, data } = response.data;

//       if (status === 'success') {
       

//         const token = data.token;
//         const userId = data.userId;
//         dispatch(setUserToken(token)); 
//         dispatch(setUserId(userId)); 
//         console.log('Login successful. Token:', token);
//         navigate('/product1')
//         // alert('Login Successfull')
//         toast.success('Welcome to frostybytes.', {
//           style: {
//             border: '1px solid #713200',
//             padding: '16px',
//             color: '#713200',
//             height:'20vh',
//             backgroundColor:'#618264'
//           },
//           iconTheme: {
//             primary: '#713200',
//             secondary: '#FFFAEE',
//           },
//         });
//       } else {
//         alert('Login Fail')
//         console.error('Login failed. Message:', message);
//         alert('Login Fail')
//       }
//     } catch (error) {
//       toast.error('Login Failed, Please check Your UserName and password')
//       console.error(`token${accessKey}`, error.message);
//     }
//   };
 
// // *****************************************************************************************************

//   return (
//     <>    
//     <div className="user_login_page bg-dark d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
//       <MDBContainer className="p-4 my-4 d-flex flex-column align-items-center w-100">
//         <form onSubmit={handleSubmit} className="w-100">
//         <label>Email</label> 
              
//           <MDBInput
//             wrapperClass="mb-4 w-100"
            
//             id="email"
//             type="email"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.email}
//             required
//           />
//           {errors.email && <small className='text-red-600 text-light'>{errors.email}</small>}<br/>
//           <label>Password</label>
              
//           <MDBInput
//             wrapperClass="mb-4 w-100"
            
//             id="password"
//             type="password"
//             name="password"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             value={values.password}
//             required
            
//           />
//           {errors.password && <small className='text-red-600 text-light
          
//           '>{errors.password}</small>}

//           <MDBBtn type="submit" className="mb-4 w-100">Sign in</MDBBtn>

//           <div className="text-center">
//             <p className="notamembar text-white mb-0">
//               Not a member?
//               <Link to='/register' className="ml-1">Register</Link>
//             </p>
//           </div>
//         </form>
//       <MDBCardImage className="login_page mr-4 border reg-form-hover" style={{ borderRadius: '0', width: '70vh' }} src="./register.jpg" fluid  />
//       </MDBContainer>
//     </div>
//     </>

//   );
// }

// export default UserLogin;



