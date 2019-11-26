import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../views/auth/login'
import Register from '../views/auth/register'
import NotFound from '../views/not_found'
import Home from '../views/home'
import SalonRoutes from './salon'
import ForgotPassword from '../views/auth/forgot'
import ResetPassword from '../views/auth/reset'

export default function IndexRoutes(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/salon" component={SalonRoutes} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgot" component={ForgotPassword} />
            <Route exact path="/password/reset/:token" component={ResetPassword} />
            <Route component={NotFound} />
        </Switch>
    )
}