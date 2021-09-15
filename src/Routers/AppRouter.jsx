import React from 'react'
import Login from '../components/Login'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function AppRouter() {
    return (
        
        <Router>
            <Switch>
                <Route exact path="/mi-tiendita" component={Login}/>                
            </Switch>
        </Router>
    )
}
