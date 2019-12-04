import React from 'react'
import { Menu } from 'antd';
import MySearch from '../../../components/search';
import HeaderLang from './language';
import Logout from './logout';
import { context } from '../../../contexts';
import {Link} from 'react-router-dom'
import RezervLink from './rezerv';

export default function Header() {
    const { t } = context()
    return (
        <header>
            <Menu mode="horizontal">
                {/* <Menu.Item key="mail">
                    <Link to="/">{t.esas_sehife}</Link>
                </Menu.Item> */}
                <Menu.Item key="mail1">
                    <Link to="/login">{t.giris}</Link>
                </Menu.Item>
                <Menu.Item key="mail2">
                    <Link to="/register">{t.qeydiyyat}</Link>
                </Menu.Item>
                {/* <Menu.Item key="mail7">
                    <Link to="/salon">{t.salonlar}</Link>
                </Menu.Item> */}
                
                <Menu.Item key="mail8">
                    <RezervLink />
                </Menu.Item>
                <Menu.Item key="mail6">
                    <Logout />
                </Menu.Item>
                <Menu.Item key="mail3">
                    <MySearch style={{width:'150px'}} valueChange={false}/>
                </Menu.Item>
                <Menu.Item key="mail5">
                    <HeaderLang />
                </Menu.Item>
            </Menu>
        </header>
    )
}