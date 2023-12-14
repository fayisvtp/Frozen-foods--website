import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import {  Select_admin_status, clearIsAdmin, setSignIn } from '../Redux/ItemSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isAdmin = useSelector(Select_admin_status)
  console.log(isAdmin)

  const handleLogout = () => {

    dispatch(clearIsAdmin(false));
    // dispatch(setSignIn(false));
    navigate("/userlogin")
  };

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <nav aria-label='breadcrumb'>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <Link to={'/adproduct'}>
              <a >Add product</a>
              </Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <Link to={'/users'}>
              <a>All Users</a>
              </Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active aria-current='page'>
              <a onClick={handleLogout}  className="btn bg-none">Logout</a>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav>
      </MDBContainer>
    </MDBNavbar>
  );
}


// import React from 'react';
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBBreadcrumb,
//   MDBBreadcrumbItem
// } from 'mdb-react-ui-kit';
// import { useDispatch } from 'react-redux';
// import {clearAdmin, clearToken, setSignIn}from '../Redux/ItemSlice'

// export default function AdminNav() {
//   const dispatch = useDispatch()

//   return (
//     <MDBNavbar expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <nav aria-label='breadcrumb'>
//           <MDBBreadcrumb>
//             <MDBBreadcrumbItem>
            
//               <a href='/adproduct'>Add product</a>
//             </MDBBreadcrumbItem>
//             <MDBBreadcrumbItem>
//               <a href='/users'>All Users</a>
//             </MDBBreadcrumbItem>
//             <MDBBreadcrumbItem active aria-current='page'>
//               <a className="btn bg-none">logout</a>
//             </MDBBreadcrumbItem>
//           </MDBBreadcrumb>
//         </nav>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }