import React from 'react';

import {Route} from "react-router-dom"
import "./App.css"
import HomePage from './pages/homepage/HomePage.component';

const HatPage = ()=>(
  <h1>HatPage</h1>
)

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop/hats" component={HatPage} />
    </div>
  );
}

export default App;
