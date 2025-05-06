import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx'; 
import LoginSignup from './Pages/LoginSignup.jsx'; // Mantén solo esta línea
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Login from './Pages/Login.jsx'; 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />}> 
               <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/Login" element={<Login />} /> 
          <Route path='/cart' element={<Cart />} />
          <Route path='/LoginSignup' element={<Login/>} />
          <Route path="/Login" element={<LoginSignup/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;