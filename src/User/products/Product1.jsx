import React from "react";
import "./Product1.css";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import cook from "/coding/Projects/frostybytes/src/assets/cook.jpg";


import SmallCardlist from "./SmallCardslist";
import PopularProducts from "./PopularProducts";
import Navbar from "../../component/Navbar";
function Product1() {

  return (
    <>
    <Navbar/>
     <Grid container className="headimg p-5 text-center bg-image" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${cook})`,
      height: 'auto',
    }}>
      <Grid item xs={12} className="text mt-5 mb-5 text-align-center text-light">
        <h1 className="freshness">
          Chilled Elegance <br />A Symphony of Freshness
        </h1>

        <div>
          <div className="delevery">
            <h3>Free Home Delivery</h3>
          </div>

          <Grid container justifyContent="center"  spacing={2}>
            <Grid  item>
              <Link to={'/'} className="veg text-light text-decoration-none me-4">
                <p className=" mt-2">Veg</p>
              </Link>
            </Grid>

            <Grid item>
              <Link to={'/'} className="text-light text-decoration-none">
                <p className="mt-2">Non-Veg</p>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>

<SmallCardlist/>
      <PopularProducts/>
    </>
  );
}

export default Product1;
