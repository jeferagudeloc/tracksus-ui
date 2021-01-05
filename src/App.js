import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Sidebar } from './components/commons/Sidebar/Sidebar';
import { Header } from './components/commons/Header/Header';
import { Projects } from './components/Projects/Projects';


import { Login } from './components/Login/Login';
import  SingleRequest  from './components/SingleRequest/SingleRequest';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="App">
        <Router>
        <div className="container">
            <div id="app" className="h-screen flex">
            <div className="w-20 sm:w-36">
                <Sidebar/>
            </div>
            <div className="bg-gray-100 w-full">
                <Header/>
                <Switch>
                    <Route path="/projects" component={Projects}>
                    </Route>
                    <Route path="/singleRequest" component={SingleRequest}>
                    </Route>
                    <Route path="/" component={Home}>
                    </Route>
                </Switch>
            </div>
          </div>
        </div>
        </Router>
      </div>
  );
}

export default App;
