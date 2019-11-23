import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Home, Login, Register, NotFound,Test} from '../views'

export default function IndexRoutes(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/test" component={Test} />
            <Route path="" component={NotFound} />
        </Switch>
    )
}