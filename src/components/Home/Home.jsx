import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from '../commons/Header/Header'
import { Sidebar } from '../commons/Sidebar/Sidebar'
import { Projects } from '../Projects/Projects'
import { SingleRequest } from '../SingleRequest/SingleRequest'

export const Home = () => {
    return (
        <div className="home">
            <div id="app" className="h-screen flex">
                <div className="w-20 sm:w-36">
                    <Sidebar />
                </div>
                <div className="bg-gray-100 w-full">
                    <Header />
                    <Switch>
                        <Route path="/projects" component={Projects}>
                        </Route>
                        <Route path="/singleRequest" component={SingleRequest}>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
