import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {

  render() {
    return (
      <StripeCheckout 
        name="ESurvey"
        description="$5 for 5 Email Credits"
        amount={500} //in cents -> $5 -> 500cents
        token={(token) =>{
          console.log(token)
        }}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default Payments;