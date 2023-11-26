import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'
import { useSelector } from 'react-redux'
import { selectToken } from '../Redux/ItemSlice'
import axios from 'axios'
function Users() {

const [users,setUsers] = useState([])
const [isdelete,setIsdelete] = useState([])
const token =useSelector(selectToken)

const findUsers = async () => {
  try {
    const response = await axios.get('https://ecommerce-api.bridgeon.in/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { status, message, data } = response.data;
    if (status === 'success') {
      setUsers(data);
    } else {
      console.error('User retrieval failed. Message:', message);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

useEffect (()=>{
  findUsers()
},[token])

const deleteUser = async (userId, token) => {
  try {
    const response = await axios.delete(`https://ecommerce-api.bridgeon.in/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { status, message } = response.data;
    if (status === 'success') {
      console.log('User deleted.');
      setIsdelete([...isdelete, "User deleted."]);
      findUsers();
    } else {
      console.error('User deletion failed. Message:', message);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

const handletrash = (id) => {
  deleteUser(id, token);
};

  return (
    <div>
     <div className="users justify-content-center bg-primary text-center text-light">
  <h1>All Users</h1>
</div>
      <MDBTable align='middle' className="mt-3">
      <MDBTableHead className="tableHeading bg-danger text-light">
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
            {users.map((user)=>(
        <tr>
          <td>

         
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{user._id}</p>
                
              </div>
            </div>
          </td>
          <td><p className='text-muted mb-0'>{user.username}</p></td>
          <td>
            <p className='fw-normal mb-1'>{user.email}</p>
          
          </td>
          {/* <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td> */}

          <td>
            <MDBBtn onClick={()=> handletrash (user._id)} color='link' rounded size='m'>
            <i class="fa-solid fa-trash"></i>
            </MDBBtn>
          </td>
        </tr>
           ))}
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default Users
