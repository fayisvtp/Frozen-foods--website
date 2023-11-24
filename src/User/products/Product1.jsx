import React from "react";
import cook from '/coding/Projects/frostybytes/src/assets/cook.jpg';

function Product1() {
  return (
    <>
      <div
        className="headimg p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${cook})`,
          height: 400,
        }}
      >
        {/* Content for the headimg div */}
      </div>
      <div className="container col-12 bg-gray">
      <i class="fa-solid fa-tomato"></i>
      <img src="https://foodtank.com/wp-content/uploads/2018/02/woman-farming.jpg" alt="" />
      </div>
    </>
  );
}

export default Product1;
