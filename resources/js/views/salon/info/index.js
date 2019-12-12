import React, { useState, useEffect } from 'react'
import {Route} from 'react-router-dom'
import { salonIdfetch } from '../../../contexts/fetch_data'
import Slide from './slide'
import { Avatar, Row, Col, Card } from 'antd'
import Img from '../../../components/image'
import Isciler from './isciler'
import NotFound from '../../not_found'

export default function SalonInfo(props){
    const {id} = props.match.params
    const [data,setdata] = useState('')
    const [check,setcheck] = useState(true)
    useEffect(()=>{
        if(id > 0){
            salonIdfetch(id)
            .then(res=>{
                if(!res.data.id){
                    setcheck(false)
                }
                setdata(res.data)
            })
        }else{
            setcheck(false)
        }
    },[id])
    return(check ? data &&
        <div className="salon-info"> 
            <Img src={data.sekil} className="salon-info-sekil" />
            <div className="salon-info-ust">
                <Avatar>{data.logo}</Avatar>
                <div className="salon-ad">{data.ad}</div>
                <div className="salon-adres">{data.adres}</div>
                <div className="salon-adres">{data.telefon}</div>
            </div>
            <Row gutter={10} className="salon-info-orta">
                <Col span={12}>
                <Card>
                    {data.qeyd}
                </Card>
                </Col>
                <Col span={12}>
                    {data.sekiller &&
                        <Slide sekiller={data.sekiller} />
                    }
                </Col>
            </Row>
            {data.isciler && 
                <Isciler isciler={data.isciler} />
            }
        </div>
        : <Route component={NotFound} />
    )
}