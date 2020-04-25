import React from "react" ;
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import{selectCartItems} from "../../redux/cart/cart.selectors"
import {toggleCartHidden} from "../../redux/cart/cart.actions"
import CustomButton from "../custom-button/custom-button.component"
import {CartDropdwonContainer,  CartItems, EmptyMessage,GoToCheckOut} from "./cart-dropdown.styles"
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({cartItems , history,toggleCartHidden})=>(
    <CartDropdwonContainer>
        <CartItems >
            {
              cartItems.length?(
              cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)
              ):
              (<EmptyMessage>Your cart is empty</EmptyMessage>)
           }

        </CartItems >
        <GoToCheckOut>
            <CustomButton onClick={()=>{history.push("/checkout");toggleCartHidden()} }>GO TO CHECKOUT</CustomButton>
            </GoToCheckOut>
    </CartDropdwonContainer>
)
const mapStateToProps = state=>({
    cartItems:selectCartItems(state)
})
const mapDispatchToProps = dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())

})
export default withRouter( connect(mapStateToProps,mapDispatchToProps)(CartDropdown));