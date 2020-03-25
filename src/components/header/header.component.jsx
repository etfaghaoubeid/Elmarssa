import React from "react" ; 
import {Link } from "react-router-dom" ;
import {createStructuredSelector} from "reselect"
import {connect} from "react-redux"
import {ReactComponent as Logo} from "../../logo.svg"
import { auth} from "../../firebase/firebase.utils"
import {currentUserSelector} from "../../redux/user/user.selectors"
import {selectCartHidden} from "../../redux/cart/cart.selectors"

import "./header.styles.scss" ;
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser , hidden})=>(
    <div className="header">
        <Link  to="/" className="logo-container">
         <Logo/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="" className="option">CONTACT</Link>
            <Link to="" className="option"></Link>
            {currentUser?
             <div className="option" onClick={()=>auth.signOut()}> SIGN OUT</div>:
             <Link className="option" to="/signin">SIGN IN</Link>
             }
             <CartIcon/>
        </div>
        {hidden? null: <CartDropdown/>}
        
    </div>
)
const mapStateToProps = createStructuredSelector(
    {
        currentUser: currentUserSelector,
        hidden: selectCartHidden,
    }
)
export default connect(mapStateToProps) (Header) ; 