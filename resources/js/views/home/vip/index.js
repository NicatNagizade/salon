import React from 'react'
import {Link} from 'react-router-dom'
import { List, Avatar } from 'antd'

export default function Vip({data,path='/user'}) {
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (item.role &&
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.role.sekil} />}
                        title={<Link to={`${path}/${item.role.id}`}>{item.role.name}</Link>}
                    />
                </List.Item>
            )}
        />
    )
}