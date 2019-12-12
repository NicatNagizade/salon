import React from 'react'
import Img from '../../../components/image'
import { Row, Col } from 'antd'

export default function ProfileUser({ data }) {
    return (
        <div className="rezerv-profil">
            <Row>
                <Col span={12}>
                    <Img src={data.sekil} alt="Sekil" className="rezerv-profil-image" />
                </Col>
                <Col span={12}>
                    <div className="rezerv-profil-title">Ad: {data.ad}</div>
                    <div className="rezerv-profil-title">Soyad: {data.soyad}</div>
                    <div className="rezerv-profil-title">Telefon: {data.telefon}</div>
                    <div className="rezerv-profil-title">Salon adi: {data.salon.ad}</div>
                    <div className="rezerv-profil-title">Adres: {data.salon.adres}</div>
                </Col>
            </Row>
        </div>
    )
}