import React from "react";
import "./Product1.css";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import cookImage from "../../assets/cook.jpg";

import SmallCardlist from "./SmallCardslist";
import PopularProducts from "./PopularProducts";
import Navbar from "../../component/Navbar";
function Product1() {

  return (
    <>
      <Navbar />
      <Grid container className="headimg p-5 text-center bg-image" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${cookImage})`,
        height: 'auto',
      }}>
        <Grid item xs={13} className="text mt-5 mb-5 text-align-center text-light">
          <div>
          <h1 className="freshness display-4 display-md-1">
            Chilled Elegance <br />A Symphony of Freshness
          </h1>
          </div>

          <div className="delevery">
            <h3>Free Home Delivery</h3>
          </div>

          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={6} md={3}>
              <Link to={'/veg'} className="veg text-light text-decoration-none me-4">
                <p className="mt-2">Vegetables</p>
              </Link>
            </Grid>

            {/* <Grid item xs={7} md={3}>
              <Link to={'/non-veg'} className="text-light text-decoration-none">
                <p className="mt-2">Non-Veg</p>
              </Link>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>

      <SmallCardlist />
      <PopularProducts />
    </>
  );
}

export default Product1;
