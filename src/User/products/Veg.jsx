import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import vdo from '../../assets/veg.mp4';
import { Grid} from '@mui/material';
import { selectProduct, selectUserToken, setProducts } from '../../Redux/ItemSlice';
import { useDispatch, useSelector } from 'react-redux';
import instance from './AxiosInstance/AxiosInstance';
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from 'mdb-react-ui-kit';
import Navbar from '../../component/Navbar';

function Veg() {
  const token = useSelector(selectUserToken);
  const products = useSelector(selectProduct);
  const dispatch = useDispatch();
  const [updatedProductData] = useState(null);
  const apiKey = process.env.REACT_APP_ACCESS_KEY;
  const dealerToken = token;

  const getAllProducts = async (token) => {
    try {
      const response = await instance.get(`/products?accessKey=${apiKey}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('ressss', response.data);
      const { status, message, data } = response.data;
      if (status === 'success') {
        dispatch(setProducts(data));
        console.log('Fetched products:', data);
      } else {
        console.error('Product retrieval failed. Message:', message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    getAllProducts(dealerToken);
  }, [updatedProductData]);

  const data = products.filter((item) => item.category === 'veg');
  console.log('veg', data);

  return (
    <>
      <Navbar />
      <Grid
        container
        className="headimg p-5 text-center"
        style={{
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <video
          src={vdo}
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
        <div
          className="gradient-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(to right top, #0a5c36, #0f5335, #134a33, #174230, #1a392d, #1a372c, #1b362b, #1b342a, #19382c, #183c2d, #16412e, #14452f)',
            opacity: 0.8, // Adjust the opacity as needed
            zIndex: 1,
          }}
        />

        <div className="container text-center" style={{ zIndex: 1 }}>
        <Grid item xs={12} sm={10} md={10} lg={5}>
  <h1 className="veg_heading text-light" style={{ fontSize: '60px' }}>
    Deliciously Perfection:<br /> Explore Our <br /> Premium Vegetables
  </h1>
</Grid>
        </div>
      </Grid>

      <MDBContainer fluid className="my-5 text-center popularproductss">
  <MDBRow>
    <h1 style={{ color: 'white' }}>Frozen Vegetables</h1>
    {data.map((item) => (
      <MDBCol key={item._id} xs="12" sm="6" md="4" lg="4" className="mb-4 p-3">
        <Link to={`/details/${item._id}`}>
          <MDBRipple
            rippleColor="dark"
            rippleTag="div"
            className="bg-image rounded hover-zoom shadow-1-strong"
            style={{ height: "240px", maxWidth: "350px", margin: '0 auto' }}
          >
            <img
              src={item.image}
              fluid
              className="w-100"
              style={{ borderRadius: '0' }}
              alt={item.title}
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

    </>
  );
}

export default Veg;
