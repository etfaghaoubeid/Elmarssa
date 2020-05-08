import React from "react" ; 
import {connect} from "react-redux"
import { createStructuredSelector } from "reselect"

import { ReactComponent as Logo } from "../../logo.svg"
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles"

import {currentUserSelector} from "../../redux/user/user.selectors"
import { selectCartHidden } from "../../redux/cart/cart.selectors"
import { startSignOut } from "../../redux/user/user.actions"

const Header = ({currentUser , hidden,startSignOut})=>(
    <HeaderContainer>
        <LogoContainer to="/">
         <Logo/>
        </LogoContainer>
        <OptionsContainer className="options">
            <OptionLink to="/shop" className="option">SHOP</OptionLink>
            <OptionLink to="" className="option">CONTACT</OptionLink>
            {currentUser?
             <OptionLink as="div" onClick={()=>startSignOut()}> SIGN OUT</OptionLink>:
             <OptionLink className="option" to="/signin">SIGN IN</OptionLink>
             }
             <CartIcon/>
        </OptionsContainer>
        {hidden? null: <CartDropdown/>}
        
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
        currentUser: currentUserSelector,
        hidden: selectCartHidden,
})
const mapDispatchToProps = dispatch => ({
    startSignOut: () => dispatch(startSignOut()),
    
})
export default connect(mapStateToProps,mapDispatchToProps) (Header) ; 