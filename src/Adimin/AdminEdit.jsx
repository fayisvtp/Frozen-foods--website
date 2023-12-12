



import React, { useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBBtn, MDBRipple, MDBInput } from "mdb-react-ui-kit";
import { useSelector } from 'react-redux';

import { useNavigate, useParams } from "react-router-dom";
import instance from "../User/products/AxiosInstance/AxiosInstance"
import { selectToken } from "../Redux/ItemSlice";

export default function AdminEdit() {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const { productId } = useParams();


  // State to manage form data
  const [productData, setProductData] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
  });

  // Handler for updating form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fetch product details based on productId
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await instance.get(`/products/${productId}`);
        const { data } = response;
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product details:', error.message);
      }
    };

    fetchProductDetails();
  }, []);

  const updateProduct = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const updatedProductData = {
      title: productData.title,
      price: productData.price,
      description: productData.description,
      category: productData.category,
      // Add other fields as needed
    };

    try {
      const response = await instance.patch(`https://ecommerce-api.bridgeon.in/products/${productId}`, updatedProductData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { status, message, data } = response.data;
      if (status === 'success') {
        navigate("/allproducts")
        console.log('Updated product details:', data);
      } else {
        console.error('Product update failed. Message:', message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  return (
    <div className='container'>
      <div className='suba row'>
        <div className="col-md-6">
          <h2>Update Product Detail</h2>
          <MDBCard
            id="card-form"
            className="shadow p-3 mb-5 bg-body-tertiary rounded m-4"
          >
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
            >
              <MDBCardImage
                src="https://loveincorporated.blob.core.windows.net/contentimages/largesize/bae78850-d8de-4c66-9473-56d5b3235c33-Frozen-vegetables.jpg"
                fluid
                alt="..."
              />
            </MDBRipple>
          </MDBCard>
        </div>
        <div className="col-md-5 mt-5">
          <MDBCard
            id="card-form"
            className="shadow p-3 mb-5 bg-body-tertiary rounded m-3"
          >
            <form onSubmit={updateProduct}>
              <MDBCardBody>

                <MDBCardTitle>
                  <div>
                    <i>Edit</i>
                  </div>
                </MDBCardTitle>
                <label>Product Name</label>
                <MDBInput
                  label='Product Name'
                  type='text'
                  name='title'
                  value={productData.title}
                  onChange={handleInputChange}
                />
                <br />

                <label>Price</label>
                <MDBInput
                  label='Product Price'
                  type='number'
                  name='price'
                  value={productData.price}
                  onChange={handleInputChange}
                />
                <br />

                <label>Description</label>
                <MDBInput
                  label='Product Description'
                  type='textarea'
                  name='description'
                  value={productData.description}
                  onChange={handleInputChange}
                />
                <br />

                <label>Category</label>
                <MDBInput
                  label='Product Category'
                  type='text'
                  name='category'
                  value={productData.category}
                  onChange={handleInputChange}
                />
                <br />

                <MDBBtn style={{ backgroundColor: "gray" }} type="submit">CONFIRM EDIT</MDBBtn>
                <MDBBtn className='ms-5' style={{ backgroundColor: "gray" }} onClick={() => navigate('/allproducts')}>Go Back</MDBBtn>
              </MDBCardBody>
            </form>
          </MDBCard>
        </div>
      </div>
    </div>
  );
}
