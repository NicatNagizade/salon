import React,{useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import MySearch from '../../../components/search';
import HeaderLang from './language';
import Logout from './logout';
import { context } from '../../../contexts';

export default function Header() {
    const {t} = context()
    console.log('test')
    return (
        <header>
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <Link to="/">{t.esas_sehife}</Link>
                </Menu.Item>
                <Menu.Item key="mail1">
                    <Link to="/login">{t.giris}</Link>
                </Menu.Item>
                <Menu.Item key="mail2">
                    <Link to="/register">{t.qeydiyyat}</Link>
                </Menu.Item>
                <Menu.Item key="mail6">
                    <Logout />
                </Menu.Item>
                <Menu.Item key="mail3">
                    <MySearch />
                </Menu.Item>
                <Menu.Item key="mail5">
                    <HeaderLang />
                </Menu.Item>
            </Menu>
        </header>
    )
}