import React, { useState, useEffect } from 'react'
import { context } from '../../../contexts'
import { useHistory } from 'react-router-dom'
import { Row, Col, Card } from 'antd'
import Img from '../../../components/image'
import UserSekiller from './sekiller'
import { profilefetch } from '../../../contexts/fetch_data'

export default function UserProfile() {
    const { t, auth } = context()
    const [data, setdata] = useState()
    const history = useHistory()
    useEffect(() => {
        const data = {id:auth.id,salon_id:auth.salon_id}
        if (auth)
            profilefetch('user', data)
                .then(res => {
                    setdata(res.data)
                    if (res.data.error) {
                        history.push('/')
                    }
                })
    }, [auth])
    return (auth &&
        <div className="user-profile">
            <Row gutter={5}>
                <Col span={8}>
                    <Card
                        className="user-profile-card"
                        hoverable
                        cover={<Img className="user-profile-card-image" alt="sekil" src={auth.sekil} />}
                    >
                        <Card.Meta title={`${auth.ad || ''} ${auth.soyad || ''}`} />
                    </Card>
                </Col>
                <Col span={16}>
                    {data && data.sekil &&
                        <UserSekiller data={data.sekil} />
                    }
                </Col>
            </Row>
            <Row gutter={10}>
                <Col span={12}>
                    <h4>Qeyd</h4>
                    {auth.qeyd}
                </Col>
                <Col span={12}>
                    {data && data.salon &&
                        <div>
                            <h4>{data.salon.ad}</h4>
                            <p>{data.salon.adres}</p>
                            <p>{data.salon.telefon}</p>
                        </div>
                    }
                </Col>
            </Row>
        </div>
    )
}