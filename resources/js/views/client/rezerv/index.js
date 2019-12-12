import React, { useState } from 'react'
import { Form, Row, Col, Tabs } from 'antd'
import MySearch from '../../../components/search'
import { rezervDatafetch } from '../../../contexts/fetch_data'
import { context } from '../../../contexts'
import TimeCalendar from './time'
import ProfileUser from './profil'
import moment from 'moment'
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
    const calendarDayAdd = (day)=>{
        const newDay = moment().add(day,'day').format('DD.MM.YYYY')
        return newDay
    }
    return (
        <Form className="rezerv-from">
            <Row gutter={20}>
                <Col span={12}>
                    <MySearch style={{ width: '100%' }} placeholder="İşci adı və ya soyadı daxil edin" onSelect={onSelect} />
                    {data && <ProfileUser data={data} />}
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
                                <TabPane tab={calendarDayAdd(3)} key="3">
                                    <TimeCalendar data={data.rezerv} day={2} />
                                </TabPane>
                                <TabPane tab={calendarDayAdd(4)} key="4">
                                    <TimeCalendar data={data.rezerv} day={3} />
                                </TabPane>
                                <TabPane tab={calendarDayAdd(5)} key="5">
                                    <TimeCalendar data={data.rezerv} day={4} />
                                </TabPane>
                                <TabPane tab={calendarDayAdd(6)} key="6">
                                    <TimeCalendar data={data.rezerv} day={5} />
                                </TabPane>
                            </Tabs>
                        </div>
                    }
                </Col>
            </Row>
        </Form>
    )
}