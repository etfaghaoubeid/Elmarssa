import React from 'react';
import {createStructuredSelector} from "reselect"
import {Route, Redirect} from "react-router-dom";
import { connect } from "react-redux";

import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import GolobalStyle from './golobal.styles';

import {currentUserSelector} from "./redux/user/user.selectors"

class App extends React.Component  {
  render(){
    return (
      <div>
        <GolobalStyle/>
        <Header />
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin"  render={()=>this.props.currentUser? (<Redirect to="/" />): (<SignInAndSignUp/>)}/>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser:currentUserSelector
})


export default connect(mapStateToProps ,null)(App);
