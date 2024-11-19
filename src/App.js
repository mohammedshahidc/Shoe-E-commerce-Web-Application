
import './App.css';
import './index.css';
import Login from './user/components/Login';
import Register from './user/components/Register';
import { Routes, Route } from 'react-router-dom';
import Home from './user/components/Home';
import Navbar from './user/components/Navbar';
import Mens from './user/components/types/Mens';
import Women from './user/components/types/Women';
import Api from './context/Productcontext';
import ProductDetailes from './user/components/ProductDetailes';
import Footer from './user/components/Footer';
import Contact from './user/components/Contact';
import Cart from './user/components/Cart';
import User from './user/components/User';
import Protectedrouter from './user/components/Protectedrouter';
import { Usercont } from './context/UserContext';
import { useContext } from 'react';
import Adminhome from './Admin/Adminhome';
import Sidebar from './Admin/Sidebar';
import ProductsA from './Admin/ProductsA';
import UserA from './Admin/UserA';
import Order from './Admin/Order';
import ProductdtA from './Admin/ProductdtA';
import Userdta from './Admin/Userdta';
import AddProdect from './Admin/AddProdect';
import Editproduct from './Admin/Editproduct';
import Notfound from './user/components/Notfound';
// import shouecollection from './user/Shouecollection';
import Wishlist from './user/components/Wishlist';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './user/components/Payment';
import Payment from '../src/user/components/Payment'
import CheckoutSuccess from './user/components/CheckoutSuccess';
import Addressform from './user/components/Addresform';
import Orders from './user/components/Orders';
import Chart from './Admin/Chart';


const stripePromise = loadStripe('your-publishable-key')
function App() {
  const { admin } = useContext(Usercont);

  return (
    <>
      <div className="App">
        {!admin ? (
          <div>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Protectedrouter><Register /></Protectedrouter>} />
              <Route path='/login' element={<Protectedrouter><Login /></Protectedrouter>} />
              <Route path='/mens' element={<Mens />} />
              <Route path='/women' element={<Women />} />
              <Route path='/:id' element={<ProductDetailes />} />
              <Route path='mens/:id' element={<ProductDetailes />} />
              <Route path='women/:id' element={<ProductDetailes />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/user' element={<User />} />
              <Route path='/wishlist' element={<Wishlist/>} />
              <Route path='/payment' element={<Payment/>} />
              <Route path='/CheckoutSuccess/:sessionId' element={<CheckoutSuccess/>} />
              <Route path='*' element={<Notfound />} />
            <Route path='/cart/checkoutform' element={<CheckoutForm/>}/>
            <Route path='/adressform' element={<Addressform/>}/>
            <Route path='/orders' element={<Orders/>}/>
            </Routes>
            <Footer />
          </div>
        ) : (
          <div className='flex overflow-scroll bg-gray-50'>
            <Sidebar />
            <Routes>
              <Route path='/admin' element={<Adminhome />} />
              <Route path='/admin/productsa' element={<ProductsA />} />
              <Route path='/admin/usera' element={<UserA />} />
              <Route path='/admin/order' element={<Order />} />
              <Route path='/admin/productsa/:id' element={<ProductdtA />} />
              <Route path='/admin/usera/:id' element={<Userdta />} />
              <Route path='/admin/productsa/AddProduct' element={<AddProdect />} />
              <Route path='/admin/productsa/:id/editproduct' element={<Editproduct />} />
              <Route path='/admin/chart' element={<Chart />} />
              <Route path='*' element={<Notfound />} />
            </Routes>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

