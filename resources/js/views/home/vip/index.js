import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import VipUsers from './user'
import VipSalons from './salon'
import VipKataloqs from './kataloq'
import { vipsfetch } from '../../../contexts/fetch_data'

export default function Vips(){
    const [data,setdata] = useState({})
    useEffect(()=>{
        vipsfetch()
        .then(res=>{
            setdata(res.data)
        })
        .catch(()=>{
            setdata({})
        })
        return()=>{
            setdata({})
        }
    },[])
    return(
        <React.Fragment>
            <Row gutter={50}>
                <Col span={8}>
                    <h4>Users</h4>
                    <VipUsers data={data.user} />
                </Col>
                <Col span={8}>
                    <h4>Salons</h4>
                    <VipSalons data={data.salon} />
                </Col>
                <Col span={8}>
                    <h4>Kataloqs</h4>
                    <VipKataloqs data={data.kataloq} />
                </Col>
            </Row>
        </React.Fragment>
    )
}