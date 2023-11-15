
import './App.css'
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar'
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <div style={{backgroundColor:"red",width:"100%",height:"300px"}}>

      </div>
    <Footer/>
    </div>
  );
}

export default App;
