import React from 'react'
import {Link} from 'react-router-dom'
import { List, Avatar } from 'antd'

export default function Lists({data,path}) {
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.sekil} />}
                        title={<Link to={`/${path}/profile/${item.id}`}>{item.ad}{item.soyad && ' '+item.soyad}</Link>}
                    />
                </List.Item>
            )}
        />
    )
}