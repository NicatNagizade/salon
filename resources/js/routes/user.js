import React from 'react'
import {Switch,Route} from 'react-router-dom'
import NotFound from '../views/not_found'
import UserInfo from '../views/user/info'
import UserProfile from '../views/user/profile'

export default function UserRoutes(){
    return(
        <Switch>
            <Route exact path="/user/profile" component={UserProfile} />
            <Route exact path="/user/:id" component={UserInfo} />
            <Route component={NotFound} />
        </Switch>
    )
}