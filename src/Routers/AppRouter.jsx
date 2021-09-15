import React from 'react'
import Cards from '../components/Cards'
import Admin from '../components/Admin'
import Login from '../components/Login'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NavBar from '../components/NavBar';

export default function AppRouter() {
    return (
        
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/mi-tiendita/login" component={Login}/>                
                <Route exact path="/mi-tiendita/admin" component={Admin}/>                
                <Route exact path="/mi-tiendita" component={Cards}/>                
            </Switch>
        </Router>
    )
}
