import React from 'react'
import { Menu, Row, Col } from 'antd';
import HeaderLang from './language';
import Logout from './logout';
import { context } from '../../../contexts';
import { Link } from 'react-router-dom'
import RezervLink from './rezerv'
import HeaderSearch from './search';
import HeaderProfile from './profile';

export default function Header() {
    const { t, auth } = context()
    const Accaunt = () => {
        const login = auth.id > 0 ? true : false;
        return (
            <Menu mode="horizontal">
                {
                    !login ?
                    <Menu.SubMenu title="Accaunt">
                        <Menu.Item><Link to="/login">{t.giris}</Link></Menu.Item>
                        <Menu.Item><Link to="/register">{t.qeydiyyat}</Link></Menu.Item>
                    </Menu.SubMenu>
                    :
                    <Menu.SubMenu title="Accaunt">
                        <Menu.Item><HeaderProfile /></Menu.Item>
                        <Menu.Item><Logout /></Menu.Item>
                    </Menu.SubMenu>
                }
            </Menu>
        )
    }
    return (
        <header>
            <Row type="flex" justify="space-between" style={{ width: '95%', margin: '0 auto' }} align="middle">
                <Col>
                    LOGO
                </Col>
                <Col>
                    <Menu mode="horizontal">
                        <Menu.Item key="esas">
                            <Link to="/">{t.esas_sehife}</Link>
                        </Menu.Item>
                        <Menu.Item key="salon">
                            <Link to="/salon">{t.salonlar}</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col>
                    <Row type="flex" align="middle" gutter={20}>
                        <Col>
                            <HeaderSearch />
                        </Col>
                        <Col>
                            <RezervLink />
                        </Col>
                        <Col>
                            <HeaderLang />
                        </Col>
                        <Col>
                            <Accaunt />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </header>
    )
}