import React, { useState } from 'react'
import { Form, Row, Col, Tabs } from 'antd'
import MySearch from '../../../components/search'
import { rezervDatafetch } from '../../../contexts/fetch_data'
import { context } from '../../../contexts'
import moment from 'moment'
import TimeCalendar from './time'
const {TabPane} = Tabs
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
            <Row gutter={20}>
                <Col span={12}>

                </Col>
                <Col span={12}>
                    {
                        data && data.rezerv &&
                        <div>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Bugun" key="1">
                                    <TimeCalendar data={data.rezerv} />
                                </TabPane>
                                <TabPane tab="Sabah" key="2">
                                    <TimeCalendar data={data.rezerv} day={1} />
                                </TabPane>
                                <TabPane tab="06.12.2019" key="3">
                                <   TimeCalendar data={data.rezerv} day={2} />
                                </TabPane>
                            </Tabs>
                        </div>
                    }
                </Col>
            </Row>
        </Form>
    )
}