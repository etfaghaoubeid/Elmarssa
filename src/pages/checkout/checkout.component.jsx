import React from "react" ;
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"
import{selectCartItems,selectCartTotal} from "../../redux/cart/cart.selectors"
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";


const CheckoutPage = ({cartIems,cartTotal})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartIems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
        <div className="total">
            <span>${cartTotal}</span>
        </div>
        <div className="test-warning">
            *Please use the following  test credit cart for payments 
             <br /> 
            4242 4242 4242 4242 - Exp 08/20 Cvv 123 
        </div>
        <StripeCheckoutButton price={cartTotal}/>
    
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartIems:selectCartItems,
    cartTotal: selectCartTotal
})
export default connect(mapStateToProps) (CheckoutPage);