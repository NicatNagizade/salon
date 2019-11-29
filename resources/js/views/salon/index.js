import React, { useState, useEffect } from 'react'
import { Card, Pagination } from 'antd'
import { Link } from 'react-router-dom'
import { context } from '../../contexts'
import { salonlarfetch } from '../../contexts/fetch_data'
import Img from '../../components/image'

export default function Salon() {
    const { setloading } = context()
    const [salonlar, setsalonlar] = useState('')
    const { data, current_page, last_page } = salonlar
    useEffect(() => {
        let mounted = true
        setloading(true)
        salonlarfetch()
        .then(res => {
            if(mounted){
                setsalonlar(res.data)
                setloading(false)
            }
        })
        return()=>{
            setloading(false)
            mounted = false
        }
    }, [])
    const handleChange = page => {
        setloading(true)
        salonlarfetch(page)
        .then(res => {
            setsalonlar(res.data)
            setloading(false)
        })
    }
    return (
        <div>
            <div className="salonlar">
                {data && data.map(d => {
                    return (
                        <Link key={d.id} to={`salon/${d.id}`}>
                            <Card
                                hoverable
                                cover={<Img className="salonlar-image" alt={d.ad} src={d.sekil} />}
                            >
                                <Card.Meta title={d.ad} description={d.adres} />
                            </Card>
                        </Link>
                    )
                })}
            </div>
            {last_page &&
                <div style={{textAlign:'center', margin:'40px 0' }}>
                    <Pagination defaultCurrent={current_page} total={last_page * 10} onChange={handleChange} />
                </div>
            }
        </div>
    )
}