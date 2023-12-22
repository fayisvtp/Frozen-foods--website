

import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import ProductDetails from './User/ProductDetails';
import Cart from './User/products/Cart';
import Wishlist from './User/products/Wishlist';

import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Select_admin_status } from './Redux/ItemSlice';
import ErrorPage from './ErrorPage';
import Veg from './User/products/Veg';



function App() {

  const isAdmin = useSelector(Select_admin_status)

  return (
    <div >
      <BrowserRouter>
      <Toaster position="top-center"/>  
      <Routes>
     
      {/* ------------------------user side------------------------ */}
      <>
      <Route path='/' element ={<Home/>}/>
      <Route path='/register' element ={<Register/>}/>
      <Route path='product1' element ={<Product1/>}/>
      <Route path='/userlogin' element ={<UserLogin/>}/>
      <Route path='/foodcost' element ={<FoodCost/>}/>
      <Route path='/details/:id' element ={<ProductDetails/>}/>
      <Route path='/cart' element ={<Cart/>}/>
      <Route path='/wishlist' element ={<Wishlist/>}/>
      <Route path='/veg' element ={<Veg/>}/>
      <Route path='/*' element ={<ErrorPage/>}/>
      {/* <Navbar/> */}
      </>

      {/* ------------------------Admin side------------------------ */}
      {isAdmin? 
        <>
      <Route path='/adminhome' element= {<AdminHome/>}/>
      <Route path='/adproduct' element ={<AdProduct/>}/>
      <Route path='/allproducts' element ={<AllProducts/>}/>
      <Route path="/adminedit/:productId" element={<AdminEdit />} /> 
   
      <Route path='/users' element={<Users />} />
      </>
       : "*"}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
