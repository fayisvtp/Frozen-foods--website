

import { Route, Routes } from 'react-router-dom';
import LoginAdmin from './Adimin/LoginAdmin';
// import './App.css'
import Home from './component/Home';
import AdminHome from './Adimin/AdminHome';
import AdProduct from './Adimin/AdProduct';
import AllProducts from './Adimin/AllProducts';
import AdminEdit from './Adimin/AdminEdit';
import Product1 from './User/products/Product1';
import Register from './User/products/Register';
import UserLogin from './User/UserLogin';
import FoodCost from './component/FoodCost';
import Users from './Adimin/Users';
import ProductSlider from './User/products/ProductSlider';
import ProductDetails from './User/ProductDetails';
import Cart from './User/products/Cart';




function App() {

  return (
    <div >
      <Routes>

      {/* ------------------------user side------------------------ */}
      <Route path='/' element ={<Home/>}/>
      <Route path='/register' element ={<Register/>}/>
      <Route path='product1' element ={<Product1/>}/>
      <Route path='/userLogin' element ={<UserLogin/>}/>
      <Route path='/foodcost' element ={<FoodCost/>}/>
      <Route path='/details/:id' element ={<ProductDetails/>}/>
      <Route path='/cart' element ={<Cart/>}/>
      {/* <Navbar/> */}
      

      {/* ------------------------Admin side------------------------ */}
 

       <Route path='/adminhome' element= {<AdminHome/>}/>
      <Route path='/adproduct' element ={<AdProduct/>}/>
      <Route path='/allproducts' element ={<AllProducts/>}/>
      <Route path="/adminedit/:productId" element={<AdminEdit />} /> 
      <Route path='/adminlogin' element ={<LoginAdmin/>}/> 
      <Route path='/users' element ={<Users/>}/> 

   
      </Routes>
     
    </div>
  );
}

export default App;
