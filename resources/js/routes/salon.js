import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Salon from '../views/salon'
import NotFound from '../views/not_found'
import SalonInfo from '../views/salon/info'

export default function SalonRoutes(){
    return(
        <Switch>
            <Route exact path="/salon/profile/:id" component={SalonInfo} />
            <Route exact path="/salon" component={Salon} />
            <Route component={NotFound} />
        </Switch>
    )
}