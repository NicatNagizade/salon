import React, { useState, useEffect } from 'react'
import { salonIdfetch } from '../../../contexts/fetch_data'
import Slide from './slide'
import { Avatar, Row, Col, Card } from 'antd'
import Img from '../../../components/image'
import Isciler from './isciler'

export default function SalonInfo(props){
    const {id} = props.match.params
    const [data,setdata] = useState('')
    useEffect(()=>{
        salonIdfetch(id)
        .then(res=>{
            setdata(res.data)
        })
    },[id])
    return(data &&
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
    )
}