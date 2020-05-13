import React from "react"; 
import { connect } from "react-redux"

import { CartIconContainer, ShopingIconContainetr, CountIcon } from "./cart-icon.styles";

import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"

const CartIcon = ({toggleCartHidden, itmesCount})=>(
    <CartIconContainer  onClick={toggleCartHidden}>
        <ShopingIconContainetr />
        <CountIcon >{itmesCount}</CountIcon>

    </CartIconContainer>
)
const mapDispatchToProps = dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
const mapStateToProps = state=>({
    itmesCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps ,mapDispatchToProps)(CartIcon);