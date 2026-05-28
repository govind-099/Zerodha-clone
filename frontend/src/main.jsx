import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './index.css';

// import App from './App.jsx';
import HomePage from './Landing...page/home/HomePage';
import AboutPage from './Landing...page/about/AboutPage';
import ProductPage from './Landing...page/products/ProductPage';
import PricingPage from './Landing...page/pricing/PricingPage';
import SupportPage from './Landing...page/support/SupportPage';
import SignupPage from './Landing...page/signup/SignupPage';

import NotFound from './Landing...page/NotFound';
import Navbar from './Landing...page/Navbar';
import Footer from './Landing...page/Footer'

// import Signup  from "./pages/Signup";
import Login from "./pages/Login";



createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //      <HomePage />
  // </StrictMode>,
 <BrowserRouter>
  <Navbar/>
    <Routes>
     <Route path='/' element={<HomePage/>}/>  {/* element mean vo konsa component hai jo es route pe open hoga */}
    <Route path='/signup' element={<SignupPage/>}/>
    <Route path='/login' element={<Login/>}/>
     <Route path='/about' element={<AboutPage/>}/>
     <Route path='/product' element={<ProductPage/>}/> 
     <Route path='/pricing' element={<PricingPage/>}/>
     <Route path='/support' element={<SupportPage/>}/>
     <Route path='*' element={<NotFound/>}/>
    </Routes>
  <Footer/>
 </BrowserRouter>

)
