import React from "react" ;
import { connect } from "react-redux";
import { CheckoutPageContainer,CheckoutHeader,HeaderBlock,Total,TestWarning} from "./checkout.styles"
import {createStructuredSelector} from "reselect"
import{selectCartItems,selectCartTotal} from "../../redux/cart/cart.selectors"
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";


const CheckoutPage = ({cartIems,cartTotal})=>(
    <CheckoutPageContainer>
        <CheckoutHeader >
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {cartIems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
        <Total>
            <span>${cartTotal}</span>
        </Total>
        <TestWarning>
            *Please use the following  test credit cart for payments 
             <br /> 
            4242 4242 4242 4242 - Exp 08/20 Cvv 123 
        </TestWarning>
        <StripeCheckoutButton price={cartTotal}/>
    
    </CheckoutPageContainer>
)
const mapStateToProps = createStructuredSelector({
    cartIems:selectCartItems,
    cartTotal: selectCartTotal
})
export default connect(mapStateToProps) (CheckoutPage);