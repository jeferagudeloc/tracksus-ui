import React, { useContext } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { Login } from '../Login/Login'
import { Home } from '../Home/Home'
import { AuthContext } from '../../context/AuthProvider'

export const Layout = () => {
    const { userState } = useContext(AuthContext);
    return (
        <div className="app">
            <Switch>
                <Route path="/login" component={Login}>
                    {userState ? <Redirect to="/" /> : <Login />}
                </Route>
                <Route path="/" component={Home}>
                    {!userState ? <Redirect to="/login" /> : <Home />}
                </Route>
            </Switch>
        </div>
    )
}
