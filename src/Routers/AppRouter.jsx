import React from 'react'
import Home from '../components/Home'

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
                <Route exact path="/mi-tiendita" component={Home}/>                
            </Switch>
        </Router>
    )
}
