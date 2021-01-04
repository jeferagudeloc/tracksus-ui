import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Sidebar } from '../commons/Sidebar/Sidebar';
import { Header } from '../commons/Header/Header';
import { Projects } from '../Projects/Projects';


export const Home = () => {
    return (
        <div className="container">
            <div id="app" className="h-screen flex">
            <div className="w-20 sm:w-36">
                <Sidebar/>
            </div>
            <div className="bg-gray-100 w-full">
                <Header/>
                <Router>
                    <Switch>
                        <Router path="/projects">
                            <Projects></Projects>
                        </Router>
                    </Switch>
                </Router>
            </div>
        </div>
            
        </div>
    )
}
