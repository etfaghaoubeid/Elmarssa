import React from "react" ; 
import {Link } from "react-router-dom" ;
import {createStructuredSelector} from "reselect"
import {connect} from "react-redux"
import {ReactComponent as Logo} from "../../logo.svg"
import { auth} from "../../firebase/firebase.utils"
import {currentUserSelector} from "../../redux/user/user.selectors"
import { selectCartHidden } from "../../redux/cart/cart.selectors"

import {HeaderContainer, LogoContainer,OptionsContainer,OptionLink,OptionDiv} from "./header.styles"

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser , hidden})=>(
    <HeaderContainer>
        <LogoContainer to="/">
         <Logo/>
        </LogoContainer>
        <OptionsContainer className="options">
            <OptionLink to="/shop" className="option">SHOP</OptionLink>
            <OptionLink to="" className="option">CONTACT</OptionLink>
            {currentUser?
             <OptionDiv className="option" onClick={()=>auth.signOut()}> SIGN OUT</OptionDiv>:
             <OptionLink className="option" to="/signin">SIGN IN</OptionLink>
             }
             <CartIcon/>
        </OptionsContainer>
        {hidden? null: <CartDropdown/>}
        
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector(
    {
        currentUser: currentUserSelector,
        hidden: selectCartHidden,
    }
)
export default connect(mapStateToProps) (Header) ; 