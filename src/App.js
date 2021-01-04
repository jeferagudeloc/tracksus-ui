import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
       <Switch>
         <Router path="/login">
          <Login/>
         </Router>
         <Router path="/">
           <Home/>
         </Router>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
