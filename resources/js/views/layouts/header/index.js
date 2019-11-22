import React,{useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import MySearch from '../../../components/search';
import HeaderLang from './language';
import Logout from './logout';
import { context } from '../../../contexts';

export default function Header() {
    return (
        <header>
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="mail1">
                    <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="mail2">
                    <Link to="/register">Register</Link>
                </Menu.Item>
                <Menu.Item key="mail6">
                    <Logout />
                </Menu.Item>
                <Menu.Item key="mail4">
                    <Link to="/test">Test</Link>
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