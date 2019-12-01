import React from 'react'
import { Row, Col, Card } from 'antd'
import Img from '../../../components/image'
import { Link } from 'react-router-dom'

export default function Isciler({ isciler }) {
    return (
        <div>
            <h1>Isciler</h1>
            <Row gutter={10}>
                {isciler.map((d, i) => {
                    return (
                        <Col key={i} span={6} style={{marginBottom:'10px'}}>
                            <Link to={`/user/${d.id}`}>
                                <Card
                                    hoverable
                                    cover={<Img alt="sekil" src={d.sekil} className="isci-cart-image" />}
                                >
                                    <Card.Meta
                                        title={d.ad}
                                        description={d.email}
                                    />
                                </Card>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}