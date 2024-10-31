import React, { useContext } from 'react';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import { cartcontext } from '../../context/Cartproduct';

const stripePromise = loadStripe('pk_test_51Q7YRMH1r2oR4XQnwqQDGNaSFAxEEJp24xfcQHsm62HTkD0tUEGOlpXSG54IUOG1nMs5g12N4Awn01SSb14KxDsD00USdRpFc5')

export default function CheckoutPayment(){
  const {clientSecret}=useContext(cartcontext)
const option={clientSecret}

  return(
    <div className="m-auto max-w-3xl p-5 text-orange-900 pt-20">
          <h1 className="text-2xl py-3 text-center">Payment</h1>
          <EmbeddedCheckoutProvider stripe={stripePromise} options={option}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
  )
}