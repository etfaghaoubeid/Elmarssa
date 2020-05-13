import React from "react";
import {CartIemContainer, CartImage, ItemDetails ,ItemName,ItemPrice} from "./cart-item.styles"
const CartItem = ({item:{imageUrl , price, name,quantity}})=>(
    <CartIemContainer>
        <CartImage src={imageUrl} alt="item"/>
        <ItemDetails className="item-details">
            <ItemName className="name">{name}</ItemName>
            <ItemPrice className="price">{quantity}*${price}</ItemPrice>
        </ItemDetails>
    </CartIemContainer>
)
export default CartItem;