import React from "react";
import {connect} from "react-redux";
import {removeItem,decreaseItem,increaseItem} from "../../redux/cart/cart.actions"

import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem,removeItem,decreaseItem,increaseItem})=>{
    const {name, price, quantity, imageUrl} = cartItem;
return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=>decreaseItem(cartItem)}>&#10094;</div>
            <span>{quantity}</span>
            <div className="arrow" onClick={()=>increaseItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=>removeItem(cartItem)}>&#10005;</div>

    </div>
)}
const mapDispatchToProps = dispatch=>({
    removeItem:(cartItem)=>dispatch(removeItem(cartItem)),
    decreaseItem:cartItem=>dispatch(decreaseItem(cartItem)),
    increaseItem:cartItem=>dispatch(increaseItem(cartItem))

})
export default connect(null,mapDispatchToProps)(CheckoutItem);