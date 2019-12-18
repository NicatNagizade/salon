import React from 'react'
import { Menu, Icon } from 'antd'
const { SubMenu } = Menu

export default function AdminSolMenu() {
    return (
        <Menu
            style={{ width: 180 }}
            defaultSelectedKeys={['1']}
            mode="inline"
        >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
        </Menu>
    )
}