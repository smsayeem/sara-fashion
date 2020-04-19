import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './style.scss'

function StripeCheckoutButton({price}){
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_cZuFoaNDdlbCJP2dUwfNq7rH00gzoT2T9T";

    const onToken=(token)=>{
        console.log('token=', token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Sara Fashion'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/KEJ.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;