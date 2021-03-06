import React from 'react'
import {Switch,Route} from 'react-router-dom'
import NotFound from '../views/not_found'
import UserInfo from '../views/user/info'
import UserProfile from '../views/user/profile'

export default function UserRoutes(){
    return(
        <Switch>
            <Route path="/user/profile/:id" component={UserInfo} />
            <Route exact path="/user/profile" component={UserProfile} />
            <Route component={NotFound} />
        </Switch>
    )
}