import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../views/auth/login'
import Register from '../views/auth/register'
import NotFound from '../views/not_found'
import Home from '../views/home'

export default function IndexRoutes(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="" component={NotFound} />
        </Switch>
    )
}