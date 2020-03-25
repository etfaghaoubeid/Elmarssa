import React from "react"; 
import {connect }  from "react-redux"
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"
import {ReactComponent as ShoppingIcon} from "../../shopping-icon.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({toggleCartHidden, itmesCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="count-item">{itmesCount}</span>

    </div>
)
const mapDispatchToProps = dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
const mapStateToProps = state=>({
    itmesCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps ,mapDispatchToProps)(CartIcon);