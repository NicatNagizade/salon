import React, { useState } from 'react'
import { Form, Row, Col } from 'antd'
import MySearch from '../../../components/search'
import { rezervDatafetch } from '../../../contexts/fetch_data'
import { context } from '../../../contexts'
import TimeCalendar from './time'

export default function Rezerv() {
    const { t, setloading } = context()
    const [data, setdata] = useState()
    const onSelect = (e) => {
        setloading(true)
        rezervDatafetch(e)
            .then(res => {
                setloading(false)
                setdata(res.data)
            })
    }
    return (
        <Form className="rezerv-from">
            <Row gutter={20}>
                <Col span={8}>
                    <MySearch style={{ width: '100%' }} placeholder="İşci adı və ya soyadı daxil edin" onSelect={onSelect} />
                </Col>
                <Col span={8}>
                    <label>Telefon: {data && <strong>{data.telefon}</strong>}</label>
                </Col>
                <Col span={8}>
                    <label>Email: {data && <strong>{data.email}</strong>}</label>
                </Col>
            </Row>
            <Row gutter={20} style={{ marginTop: '20px' }}>
                <Col span={8}>
                    <label>Salon: {data && <strong>{data.salon.ad}</strong>}</label>
                </Col>
                <Col span={16}>
                    <label>Adress: {data && <strong>{data.salon.adres}</strong>}</label>
                </Col>
            </Row>
            {
                data && data.rezerv &&
                <div>
                    <div className="rezerv-times-title">Bugun</div>
                    <TimeCalendar data={data.rezerv} />
                    <div className="rezerv-times-title">Sabah</div>
                    <TimeCalendar />
                    <div className="rezerv-times-title">06.12.2019</div>
                    <TimeCalendar />
                </div>
            }
        </Form>
    )
}