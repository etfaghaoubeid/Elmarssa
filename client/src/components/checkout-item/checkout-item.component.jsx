import React from "react";
import { connect } from "react-redux";
import {CheckoutItemContainer, ImageContainer,Image,Name,Price,Quantity,Arrow,RemoveItem} from "./checkout-item"
import {removeItem,decreaseItem,increaseItem,} from "../../redux/cart/cart.actions"


const CheckoutItem = ({cartItem,removeItem,decreaseItem,increaseItem})=>{
    const {name, price, quantity, imageUrl} = cartItem;
return(
    <CheckoutItemContainer >
        <ImageContainer>
            <Image src={imageUrl} alt="item"/>
        </ImageContainer>
        <Name >{name}</Name>
        <Quantity >
            <Arrow onClick={()=>decreaseItem(cartItem)}>&#10094;</Arrow>
            <span>{quantity}</span>
            <Arrow  onClick={()=>increaseItem(cartItem)}>&#10095;</Arrow>
        </Quantity>
        <Price>{price}</Price>
        <RemoveItem className="remove-button" onClick={()=>removeItem(cartItem)}>&#10005;</RemoveItem>
    </CheckoutItemContainer>
)}
const mapDispatchToProps = dispatch=>({
    removeItem:(cartItem)=>dispatch(removeItem(cartItem)),
    decreaseItem:cartItem=>dispatch(decreaseItem(cartItem)),
    increaseItem:cartItem=>dispatch(increaseItem(cartItem))

})
export default connect(null,mapDispatchToProps)(CheckoutItem);