

import { Route, Routes } from 'react-router-dom';
import LoginAdmin from './Adimin/LoginAdmin';
// import './App.css'
// import Footer from './component/Footer';
// import Home from './component/Home';
// import Navbar from './component/Navbar'
import AdminHome from './Adimin/AdminHome';
import AdProduct from './Adimin/AdProduct';
import AllProducts from './Adimin/AllProducts';
import AdminEdit from './Adimin/AdminEdit';
function App() {

  return (
    <div className="App">
      <Routes>
      {/* ------------------------user side------------------------ */}

      {/* <Navbar/> */}
      {/* <Route path='/adproduct' element ={<AdProduct/>}/>
      <Route path='/' element ={<AllProducts/>}/> */}
      
{/* 
    <Footer/> */}
      {/* ------------------------Admin side------------------------ */}
 
      <Route path='/adminhome' element= {<AdminHome/>}/> 
      <Route path='/adminhome' element= {<AdminHome/>}/>
      <Route path='/adproduct' element ={<AdProduct/>}/>
      <Route path='/allproducts' element ={<AllProducts/>}/>
      <Route path="/adminedit/:productId" element={<AdminEdit />} /> 

      <Route path='/' element ={<LoginAdmin/>}/>

   
      </Routes>
    </div>
  );
}

export default App;
