


import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { selectToken } from "../Redux/ItemSlice";
import instance from "../User/products/AxiosInstance/AxiosInstance";

const AdProduct = () => {
  const token = useSelector(selectToken);
  console.log(token)

  const addProduct = async (event) => {
    
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", event.target.title.value);
    formData.append("price", event.target.price.value);
    formData.append("description", event.target.description.value);
    formData.append("category", event.target.category.value);
    formData.append("img", event.target.image.files[0]);

    try {
      const response = await instance.post(
        "/products",formData,

        {
         
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
   

      const { status, message, data } = response.data;

      if (status === "success") {
        console.log("Product added. Product details:", data);
        alert("product added")
      } else {
        console.error("Product addition failed. Message:", message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  return (
    <div className="bg-light" style={{ minHeight: "1000vh" }}>
      <section className="container py-5">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h2>Product Adding</h2>
            <hr />

            <form
              onSubmit={addProduct}
        
              encType="multipart/form-data"
            >
              {/* Update input name to "title" */}
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Product Name"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Category"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Product Price"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Product Description"
                  className="form-control"
                ></textarea>
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
                <br />
                <br />
                <Link to="/allproducts" className="btn btn-danger">
                  View All Products
                </Link>
              </div>
            </form>
          </div>

          <div className="col-md-6 bg-dark">
            <div className="col-12 d-flex justify-content-center mt-4">
              <img
                src="https://yesofcorsa.com/wp-content/uploads/2018/02/Frozen-Vegetables-Wallpaper-For-PC.jpg"
                alt=""
                style={{
                  borderRadius: "0%",
                  height: "400px",
                  width: "400px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdProduct;
