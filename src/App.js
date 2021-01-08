import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import { Sidebar } from './components/commons/Sidebar/Sidebar';
import { Header } from './components/commons/Header/Header';
import { Projects } from './components/Projects/Projects';


import { Login } from './components/Login/Login';
import SingleRequest from './components/SingleRequest/SingleRequest';
import { Home } from './components/Home/Home';
import { Layout } from './components/layout/Layout';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
