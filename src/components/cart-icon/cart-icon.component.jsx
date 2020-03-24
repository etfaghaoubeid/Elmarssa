import React from "react"; 
import {ReactComponent as ShoppingIcon} from "../../shopping-icon.svg"
import "./cart-icon.styles.scss"

const CartIcon = ()=>(
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon"/>
        <span className="count-item">0</span>

    </div>
)
export default CartIcon;