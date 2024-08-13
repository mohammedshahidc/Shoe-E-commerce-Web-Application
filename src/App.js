import './App.css';
import './index.css'
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
import Protectedrouter from './components/Protectedrouter';
import { Usercont } from './Apiservices/UserContext';
import { useContext } from 'react';
import Adminhome from './components/Admin/Adminhome'
import Sidebar from './components/Admin/Sidebar';

function App() {
  const{admin}=useContext(Usercont)
  return (
    <div className="App">
      {!admin?(
        <div>
 <Navbar/>
      
      <Routes >
          <Route  path='/' element={<Home />} />
          <Route  path='/register' element={
            <Protectedrouter><Register /></Protectedrouter>} />
          <Route path='/login' element={
            <Protectedrouter><Login/></Protectedrouter>}/>
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
      ):(
        <div>
       
        <Routes>
          <Route path='/admin' element={<Adminhome/>}/>
        </Routes>
        <Sidebar/>
        </div>
      )}
     
       
    </div>
  );
}

export default App;

