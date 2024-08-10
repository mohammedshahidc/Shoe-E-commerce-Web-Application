import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Mens from './components/Mens';
import Women from './components/Women';
import Api from './Apiservices/Productcontext';
import ProductDetailes from './components/ProductDetailes';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Cart from './components/Cart';
import User from './components/User';
import Payment from './components/Payment';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/register' element={<Register />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/mens' element={<Mens/>} />
          <Route path='/women' element={<Women/>}/>
          <Route path='/:id' element={<ProductDetailes/>}/>
          <Route path='mens/:id' element={ <ProductDetailes/>}/>
          <Route path='women/:id' element={ <ProductDetailes/>}/>
          <Route  path='/contact' element={<Contact />} />
          <Route  path='/cart' element={<Cart />} />
          <Route path='/user' element={<User/>}/>
          <Route path='/payment' element={<Payment />} />
        </Routes>
      
      <Footer/>
       
    </div>
  );
}

export default App;

