import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Salon from '../views/salon'
import NotFound from '../views/not_found'
import SalonInfo from '../views/salon/info'

export default function SalonRoutes(){
    return(
        <Switch>
            <Route exact path="/salon" component={Salon} />
            <Route exact path="/salon/:id" component={SalonInfo} />
            <Route component={NotFound} />
        </Switch>
    )
}