import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import ProductContext from './context/Productcontext'
import Cartproduct from './context/Cartproduct';
import UserContext from './context/UserContext';
import WshlistContext from './context/WshlistContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

    <UserContext>
      <ProductContext>
        <Cartproduct>
          <WshlistContext>
          <Elements stripe={stripePromise}>
            <App />
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition="Bounce"
            />
            </Elements>
          </WshlistContext>
        </Cartproduct>
      </ProductContext>
    </UserContext>

  </BrowserRouter>

)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
