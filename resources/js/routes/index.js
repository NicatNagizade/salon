import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../views/auth/login'
import Register from '../views/auth/register'
import NotFound from '../views/not_found'
import Home from '../views/home'
import SalonRoutes from './salon'
import ForgotPassword from '../views/auth/forgot'
import ResetPassword from '../views/auth/reset'
import UserRoutes from './user'
import ClientRoutes from './client'
import AdminRoutes from './admin'

export default function IndexRoutes(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgot" component={ForgotPassword} />
            <Route exact path="/:guard?/password/reset/:token" component={ResetPassword} />
            <Route path="/admin" component={AdminRoutes } />
            <Route path="/salon" component={SalonRoutes} />
            <Route path="/user" component={UserRoutes} />
            <Route path="/client" component={ClientRoutes} />
            <Route component={NotFound} />
        </Switch>
    )
}