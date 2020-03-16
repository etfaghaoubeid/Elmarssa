import React from 'react';

import {Route} from "react-router-dom"
import "./App.css"
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';



function App() {
  return (
    <div>
      <Header/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignIn}/>
    </div>
  );
}

export default App;
