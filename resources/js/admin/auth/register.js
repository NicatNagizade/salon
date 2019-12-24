import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Icon, Select } from 'antd'
import { context } from '../../contexts'
import Axios from 'axios'
const {Option} = Select

export default function AdminRegister() {
    const history = useHistory()
    const { auth } = context()
    const [loading, setloading] = useState(false)
    const ref_name = useRef()
    const ref_email = useRef()
    const ref_password = useRef()
    const ref_role = useRef()
    useEffect(() => {
        if (auth.role != 'master') {
            history.push('/admin')
        }
    }, [])
    const handleClick = () => {
        setloading(true)
        const name = ref_name.current.input.value
        const email = ref_email.current.input.value
        const password = ref_password.current.input.value
        const role = ref_role.current.rcSelect.state.value[0]
        Axios.post('/admin/register', { name, email, password,role })
            .then(() => {
                setloading(false)
                history.push('/admin/admin')
            })
            .catch(res => {
                setloading(false)
                seterrors(res.response.data.errors)
            })
    }
    const onEnter = e => {
        if (!loading && e.keyCode == 13) {
            handleClick()
        }
    }
    return (
        <Form className="login-form" onKeyUp={onEnter}>
            <Form.Item>
                <Input prefix={<Icon type="user" />} placeholder="Name" ref={ref_name} />
            </Form.Item>
            <Form.Item>
                <Input prefix={<Icon type="mail" />} placeholder="Email" ref={ref_email} />
            </Form.Item>
            <Form.Item>
                <Input.Password prefix={<Icon type="lock" />} placeholder="Password" ref={ref_password} />
            </Form.Item>
            <Form.Item>
                <Select ref={ref_role} defaultValue="helper">
                    <Option key="master">master</Option>
                    <Option key="super">super</Option>
                    <Option key="editor">editor</Option>
                    <Option key="helper">helper</Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button loading={loading} type="primary" style={{ width: '100%' }} onClick={handleClick}>Register</Button>
            </Form.Item>
        </Form>
    )
}