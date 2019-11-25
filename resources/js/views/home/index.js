import React from 'react'
import { context } from '../../contexts'
import Slide from './slide'
import VipUsers from './vip/user'
import VipSalons from './vip/salon'
import { Row, Col, Divider } from 'antd'
import VipKataloqs from './vip/kataloq'

export default function Home() {
    const { t } = context()
    return (
        <div>
            {t.esas_sehife}
            <Slide />
            <Divider />
            <Row gutter={50}>
                <Col span={8}>
                    <h4>Users</h4>
                    <VipUsers />
                </Col>
                <Col span={8}>
                    <h4>Salons</h4>
                    <VipSalons />
                </Col>
                <Col span={8}>
                    <h4>Kataloqs</h4>
                    <VipKataloqs />
                </Col>
            </Row>
        </div>
    )
}