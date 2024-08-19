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
import ProductsA from './components/Admin/ProductsA';
import UserA from './components/Admin/UserA';
import Order from './components/Admin/Order';
import Usercartdetailes from './components/Admin/Usercartdetailes';
import ProductdtA from './components/Admin/ProductdtA';
import Userdta from './components/Admin/Userdta';
import AddProdect from './components/Admin/AddProdect';
import Editproduct from './components/Admin/Editproduct';

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
        
        <div className='flex  overflow-scroll bg-gray-50'>
       <Sidebar/>
        <Routes>
          <Route path='/admin' element={<Adminhome/>}/>
          <Route path='/admin/productsa' element={<ProductsA />} />
          <Route path='/admin/usera' element={<UserA/>}/>
          <Route path='/admin/order' element={<Order/>} />
          <Route path='/admin/usera/usercartdetailes' element={<Usercartdetailes/>}/>
          <Route path='/admin/productsa/:id' element={<ProductdtA/>}/>
          <Route path='/admin/usera/:id' element={<Userdta/>} />
          <Route path='/admin/productsa/AddProduct' element={<AddProdect/>} />
          <Route path='/admin/productsa/:id/editproduct' element={<Editproduct/>} />
         
        </Routes>
        
        </div>
      )}
     
       
    </div>
  );
}

export default App;

