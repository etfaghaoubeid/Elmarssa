import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }
    const priceForStripe = price*100;
    const publishableKey = "pk_test_LpAIPymzTWjwKCCNZwAB0z8D00cO0vrhE1"
    
    return (
        <StripeCheckout
            label="Pay Now"
            name="El atigh"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
        
    )
}
export default StripeCheckoutButton;