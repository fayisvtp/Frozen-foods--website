import * as React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct, selectUserToken, setProducts } from '../../Redux/ItemSlice';
import instance from './AxiosInstance/AxiosInstance'
import "./popularProducts.css"
import { Link } from 'react-router-dom';
export default function PopularProducts() {

 const token = useSelector(selectUserToken)
 const products = useSelector (selectProduct)
 const dispatch = useDispatch()
 const [updatedProductData, setUpdatedProductData] = useState(null);
 const apiKey = process.env.REACT_APP_ACCESS_KEY 
const dealerToken = token


const getAllProducts = async (token) => {
  try {
    const response = await instance.get(
      `/products?accessKey=${apiKey}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("ressss",response.data);
    const { status, message, data } = response.data;
    if (status === "success") {
      // Successfully fetched products.
      dispatch(setProducts(data)); // Use setProductsAction instead of setProducts
      console.log("Fetched products:", data);
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

const data = products.filter((item)=> item.category ==="Popular")
console.log("popular",data);

  return (
    <>
<div>
<MDBContainer fluid className="my-5 text-center popularproductss">
        <MDBRow>
          <h1 style={{color:'white'}}>Future Products</h1>
          {data.map((item) => (
            <MDBCol key={item._id} md="12" lg="4" className="mb-4 p-5">
              <Link to={`/details/${item._id}`}>
                {/* Wrap the content with Link */}
                <MDBRipple
                  rippleColor="dark"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom shadow-1-strong"
                  style={{ height: "240px", width: "350px" }}
                >
                  <img
                    src={item.image}
                    fluid
                    className="w-100"
                    style={{ borderRadius: '0' }}
                  />

                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          ₹{item.price}
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <h5 className="text-success ">
                      <span>{item.title}</span>
                    </h5>
                    <div
                      className="mask"
                      style={{
                        backgroundColor: 'rgba(251, 251, 251, 0.15)',
                      }}
                    ></div>
                  </div>
                </MDBRipple>
              </Link>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
      </div>
    </>
  );
}


