import React from 'react'
import {Switch,Route} from 'react-router-dom'
import NotFound from '../views/not_found'
import Rezerv from '../views/client/rezerv'

export default function ClientRoutes(){
    return(
        <Switch>
            <Route exact path="/client/rezerv" component={Rezerv} />
            <Route component={NotFound} />
        </Switch>
    )
}