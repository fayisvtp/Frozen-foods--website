import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct, selectToken } from "../Redux/ItemSlice";
import { Link } from "react-router-dom";
import { setProducts } from "../Redux/ItemSlice";
import AdminNav from "./AdminNav";

function AllProducts() {
  const token = useSelector(selectToken)
  // const token = useSelector((state) => state.item.token);

  console.log("token",token)
  const products = useSelector(selectProduct);
  const dispatch = useDispatch();
  // const dealerToken = token;
  const [updatedProductData,setUpdatedProductData] = useState(null)
  // const [product, setProduct] = useState([])

  const getAllProducts = async (token) => {
    try { 
      const response = await axios.get(
      " https://ecommerce-api.bridgeon.in/products?accessKey=e750a4e245dc6f3f299a" ,  
    {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { status, message, data } = response.data;
      if (status === "success") {
        // Successfully fetched products.
dispatch(setProducts(data))
     
        console.log("Fetched products:", data);
      } else {
        console.error("Product retrieval failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  useEffect(() => {
    getAllProducts(token);
  }, [updatedProductData]);

  const handleDelete = async (productId)=>{
   try {
    const response = await axios.delete(
      `https://ecommerce-api.bridgeon.in/products/${productId}`,
      {
        headers:{
          Authorization: `Bearer ${token}`,
        },
      }
    )
    const { status, message,  } = response.data;
    if(response.status === 200){
      console.log(response.data)
     getAllProducts()
    }
   } catch (error) {
    console.log(error)
    console.log(error.response.message)
   }
  }
 
  

 
  return (
    <div>
      <AdminNav/>
        <section className="section bg-light border-top">
  <div className="container">
    <h1 className="main-heading">All Products</h1>
    {products.length === 0 ? (
      <h4>No Stocks Available</h4>
    ) : (
      <div className="row">
        {products.map((item) => (
          <div key={item._id} className="col-md-4 mb-4 text-center">
            <div className="card shadow">
              <img
                className="w-100 border-bottom"
                src={item.image} 
                alt={item.title}
              />
              <div className="card-body">
                <h5>{item.title}</h5>
                <h4>₹{item.price}</h4>
                <div className="underline text-center"></div>
                <p>
                {item.description}
                </p>
                <p className="fs-6 text-gray">{item.catogery}</p>

                <Link className="btn btn-danger " to={`/adminedit/${item._id}`}>
                  Update
                </Link>
                <Link className="btn btn-primary " onClick={() => handleDelete(item._id)}>
   Delete
</Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</section>;

            
        </div>
  );
}

export default AllProducts;


// import React, { useEffect, useState } from "react";
// import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { selectProduct, setToken } from "../Redux/ItemSlice";
// import { Link } from "react-router-dom";
// import { setProducts } from "../Redux/ItemSlice";

// function AllProducts() {
//   const token = useSelector(setToken);
//   const products = useSelector(selectProduct);
//   const dispatch = useDispatch();
//   const dealerToken = token;
//   const [updatedProductData,setUpdatedProductData] = useState(null)

//   const getAllProducts = async (token) => {
//     try {
//       const response = await axios.get(
//       " https://ecommerce-api.bridgeon.in/products?accessKey=e750a4e245dc6f3f299a"  ,  
//     {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const { status, message, data } = response.data;
//       if (status === "success") {
//         // Successfully fetched products.

//         dispatch(setProducts(data));
//         console.log("Fetched products:", data);
//       } else {
//         console.error("Product retrieval failed. Message:", message);
//       }
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   };
//   useEffect(() => {
//     getAllProducts(dealerToken);
//   }, [updatedProductData]);

//   const deleteProduct = async (productId , token) => {
//     try {
//       const response = await axios.delete(
//         `https://ecommerce-api.bridgeon.in/products/${productId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const { status, message } = response.data;
//       if (status === "success") {
//         // Successfully deleted the product.
//         console.log("Product deleted.");
//         getAllProducts(token);
//       } else {
//         console.error("Product deletion failed. Message:", message);
//       }
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   };
//   const deleteHandle = (productId) => {
//     deleteProduct(productId, token);
//   };

//   return (
//     <div>
//       <Link to="/adproduct" className="btn btn-primary shadow w-70">
//         Add A Product
//       </Link>
//       <div>
//         <h1 className="d-flex justify-content-center">All Products</h1>
//         {products.length === 0 ? (
//           <h2 className="d-flex justify-content-center " style={{color:"red"}}>Stocks are Empty</h2>
//         ) : (
//         <MDBTable>
//           <MDBTableHead color="primary-color" textWhite>
//             <tr>
//               <th>Id</th>
//               <th>Image</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Description</th>
//               <th>Category</th>
//               {/* <th>actions</th> */}
//             </tr>
//           </MDBTableHead>
//           <MDBTableBody>
//             {products.map((item) => (
//               <tr key={item.id}>
//                 {/* <td>{index + 1}</td> */}
//                 <td>
//                   <img
//                     src={item.image}
//                     alt={`product_image_${item.id}`}
//                     style={{ width: "50px", height: "50px" }}
//                   />
//                 </td>
//                 <td>{item.title}</td>
//                 <td>{`$${item.price}`}</td>
//                 <td>{item.description}</td>
//                 <td>{item.category}</td>
                
//                 {/* Add buttons for delete and update */}
//                 <Link className="btn btn-danger shadow w-50" to="#" onClick={ ()=>deleteHandle(item._id)}>delete</Link>
//                   {/* <i className="fas fa-trash" style={{ color: "#a30000" }}></i>{" "} */}
//                 <Link to={`/adminedit/${item._id}`}>update</Link>
//               </tr>
//             ))}
//           </MDBTableBody>
//         </MDBTable>
//          )} 
//       </div>
//     </div>
//   );
// }

// export default AllProducts;
