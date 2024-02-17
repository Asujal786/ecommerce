import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from "./components/assests/Navbar";
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import './App.css';
import Footer from './components/assests/Footer';
import Men from './components/Pages/users/Men';
import Women from './components/Pages/users/Women';
import Kids from './components/Pages/users/Kids';
import ProductPage from './components/Pages/ProductPage';
import WProductPage from './components/Pages/WProductPage';
import KProductPage from './components/Pages/KProductPage';
import Cart from './components/Pages/Cart';
import Profile from './components/Pages/Profile';
import ADashboard from './components/Pages/admin/ADashboard';
import AboutUs from './components/Pages/AboutUs';
import FAQ from './components/Pages/FAQ';
import TermsAndConditions from './components/Pages/TermsAndConditions';



function App() {

  
  return (
      <Router>
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/women" element={<Women/>}></Route>
          <Route path="/kids" element={<Kids />}></Route>
          <Route path="/men/product/:id" element={<ProductPage />}></Route>
          <Route path="/kids/product/:id" element={<WProductPage />}></Route>
          <Route path="/women/product/:id" element={<KProductPage />}></Route>
          <Route path="/admin" element={<ADashboard/>}></Route>
          <Route path="/aboutUs" element={<AboutUs/>}></Route>
          <Route path="/termsAndConditions" element={<TermsAndConditions/>}></Route>
          <Route path="/FAQ" element={<FAQ/>}></Route>
        </Routes>
        <Footer/>
    </div>
    </Router >
  );
}

export default App;
