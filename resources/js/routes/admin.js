import React, { useEffect, useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import NotFound from '../views/not_found'
import Admin from '../admin'
import AdminLogin from '../admin/auth/login'
import AdminSolMenu from '../admin/sol_menu'
import AdminProfile from '../admin/profile'
import { Row, Col } from 'antd'
import { context } from '../contexts'
import AdminUsers from '../admin/views/user'
import AdminAxtaris from '../admin/views/axtaris'
import AdminDatabase from '../admin/views/database'
import AdminSalon from '../admin/views/salon'
import AdminClients from '../admin/views/client'
import AdminsShow from '../admin/views/admins'
import AdminShow from '../admin/views/admins/profile'
import AdminRegister from '../admin/auth/register'

export default function AdminRoutes() {
    const {auth} = context()
    const [check,setCheck] = useState(true)
    useEffect(()=>{
        if(auth.guard == "admin"){
            setCheck(true)
        }else{
            setCheck(false)
        }
    },[auth])
    return (
        <Row style={{margin:'10px'}}>
            {check &&
            <Col span={3}>
                <AdminSolMenu />
            </Col>
            }
            <Col span={21}>
                <Routes check={check} />
            </Col>
        </Row>
    )
}
function Routes({check}) {
    const history = useHistory()
    useEffect(()=>{
        if(!check){
            history.push('/admin/login')
        }
    },[check])
    return ( check ?
        <Switch>
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/login" component={AdminLogin} />
            <Route exact path="/admin/register" component={AdminRegister} />
            <Route exact path="/admin/profile" component={AdminProfile} />
            <Route exact path="/admin/user" component={AdminUsers} />
            <Route exact path="/admin/salon" component={AdminSalon} />
            <Route exact path="/admin/client" component={AdminClients} />
            <Route exact path="/admin/admin/:id" component={AdminShow} />
            <Route exact path="/admin/admin" component={AdminsShow} />
            <Route exact path="/admin/axtaris" component={AdminAxtaris} />
            <Route exact path="/admin/database" component={AdminDatabase} />
            <Route component={NotFound} />
        </Switch>
        :<Route exact path="/admin/login" component={AdminLogin} />
    )
}