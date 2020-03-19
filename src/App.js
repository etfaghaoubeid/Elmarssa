import React, { Children } from 'react';

import {Route} from "react-router-dom"
import "./App.css"
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';

import {auth,createUserProfileDocument} from "./firebase/firebase.utils"



class App extends React.Component  {

  constructor(props){
    super(props)
    this.state = {
      currentUser:null,
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth ,otheData)=>{
      if(userAuth) {
        const userRef = await  createUserProfileDocument(userAuth) 
        userRef.onSnapshot(snapShot=>{
        
          this.setState({
            currentUser:{
              id:snapShot.id, 
              ...snapShot.data()
            }
          })

        })
      }else{
        this.setState({currentUser:null})
      }
      
    })
  }
  render(){
    console.log(this.state.currentUser)
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn}/>
      </div>
    );

  }
  
}

export default App;
