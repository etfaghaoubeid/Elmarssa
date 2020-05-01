import React from 'react';
import {createStructuredSelector} from "reselect"
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import "./App.css"
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {currentUserSelector} from "./redux/user/user.selectors"
import CheckoutPage from './pages/checkout/checkout.component';


class App extends React.Component  {

  
  unsubscribeFromAuth = null;
  componentDidMount(){
    //const {currentUser} = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth ,otheData)=>{
    //   if(userAuth) {
    //     const userRef = await  createUserProfileDocument(userAuth) 
    //     userRef.onSnapshot(snapShot=>{
        
    //       setCurrentUser({
          
    //           id:snapShot.id, 
    //           ...snapShot.data()
            
    //       })

    //     })
    //   }else{
    //     setCurrentUser(userAuth)
    //   }
      
    // })
  }
  render(){
    return (
      <div>
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
const mapDispatchToProps = dispatch=>({
  // setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps , mapDispatchToProps)(App);
