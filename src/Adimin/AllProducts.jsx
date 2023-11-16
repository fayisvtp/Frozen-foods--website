



import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct, setToken } from "../Redux/ItemSlice";
import { Link } from "react-router-dom";
import { setProducts } from "../Redux/ItemSlice";

function AllProducts() {
  const token = useSelector(setToken);
  const products = useSelector(selectProduct);
  const dispatch = useDispatch();
  const dealerToken = token;
  const [isedit,setedit] = useState(false)
  const [updatedProductData,setUpdatedProductData] = useState(null)

  const getAllProducts = async (token) => {
    try {
      const response = await axios.get(
        "https://ecommerce-api.bridgeon.in/products?accessKey=e750a4e245dc6f3f299a",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { status, message, data } = response.data;
      if (status === "success") {
        // Successfully fetched products.

        console.log("Fetched products:", data);
        dispatch(setProducts(data));
      } else {
        console.error("Product retrieval failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  useEffect(() => {
    getAllProducts(dealerToken);
  }, [updatedProductData]);

  const deleteProduct = async (productId , token) => {
    try {
      const response = await axios.delete(
        `https://ecommerce-api.bridgeon.in/products/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { status, message } = response.data;
      if (status === "success") {
        // Successfully deleted the product.
        console.log("Product deleted.");
        getAllProducts(token);
      } else {
        console.error("Product deletion failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const deleteHandle = (productId) => {
    deleteProduct(productId, token);
  };

  return (
    <div>
      <Link to="/adproduct" className="btn btn-primary shadow w-70">
        Add A Product
      </Link>
      <div>
        <h1 className="d-flex justify-content-center">All Products</h1>
        {products.length === 0 ? (
          <h2 className="d-flex justify-content-center " style={{color:"red"}}>Stocks are Empty</h2>
        ) : (
        <MDBTable>
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              {/* <th>actions</th> */}
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.image}
                    alt={`product_image_${item._id}`}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{item.title}</td>
                <td>{`$${item.price}`}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                
                {/* Add buttons for delete and update */}
                <Link to="#" onClick={(e) => { e.preventDefault(); deleteHandle(item._id, index); }}>delete</Link>
                  {/* <i className="fas fa-trash" style={{ color: "#a30000" }}></i>{" "} */}
                <Link to={`/adminedit/${item._id}`}>update</Link>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
         )} 
      </div>
    </div>
  );
}

export default AllProducts;
