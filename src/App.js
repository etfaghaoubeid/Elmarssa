import React from 'react';

import {Route} from "react-router-dom";
import {connect} from "react-redux";
import "./App.css"
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth,createUserProfileDocument} from "./firebase/firebase.utils"
import {setCurrentUser} from "./redux/user/user.actions"


class App extends React.Component  {

  constructor(props){
    super(props)
    this.state = {
      currentUser:null,
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth ,otheData)=>{
      if(userAuth) {
        const userRef = await  createUserProfileDocument(userAuth) 
        userRef.onSnapshot(snapShot=>{
        
          setCurrentUser({
          
              id:snapShot.id, 
              ...snapShot.data()
            
          })

        })
      }else{
        setCurrentUser(userAuth)
      }
      
    })
  }
  render(){
    console.log(this.state.currentUser)
    return (
      <div>
        <Header />
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp}/>
      </div>
    );

  }
  
}
const mapDispatchToProps = dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(null , mapDispatchToProps)(App);
