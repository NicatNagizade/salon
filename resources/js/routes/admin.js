import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NotFound from '../views/not_found'
import Admin from '../admin'
import AdminLogin from '../admin/auth/login'
import AdminSolMenu from '../admin/sol_menu'
import AdminProfile from '../admin/profile'
import { Row, Col } from 'antd'

export default function AdminRoutes() {
    return (
        <Row style={{margin:'10px'}}>
            <Col span={3}>
                <AdminSolMenu />
            </Col>
            <Col span={21}>
                <Routes />
            </Col>
        </Row>
    )
}
function Routes() {
    return (
        <Switch>
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/login" component={AdminLogin} />
            <Route exact path="/admin/profile" component={AdminProfile} />
            <Route component={NotFound} />
        </Switch>
    )
}