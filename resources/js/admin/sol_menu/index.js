import React, { useEffect, useState } from 'react'
import { Menu, Icon } from 'antd'
import {Link} from 'react-router-dom'
import { context } from '../../contexts'

export default function AdminSolMenu() {
    // const {auth} = context()
    // const [check,setCheck] = useState(false)
    // useEffect(()=>{
    //     if(auth.guard == "admin"){
    //         setCheck(true)
    //     }
    // },[])
    return (
        // check ?
        <Menu
            style={{ width: 180 }}
            mode="inline"
        >
            <Menu.Item key="8"><Link to="/admin/axtaris"><Icon type="search" /> Umumi Axtaris</Link></Menu.Item>
            <Menu.Item key="1"><Link to="/admin/user"><Icon type="user" /> Users</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/admin/client"><Icon type="user" /> Istifadeciler</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/admin/salon"><Icon type="home" /> Salonlar</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/admin/admin"><Icon type="user" /> Master</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/admin/blog"><Icon type="read" /> Blog</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/admin/vip"><Icon type="bell" /> VIP</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/admin/rezerv"><Icon type="highlight" /> Rezerv</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/admin/database"><Icon type="database" /> Database</Link></Menu.Item>
        </Menu>
        // : ""
    )
}