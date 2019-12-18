import React, { useState, useRef } from 'react'
import { Form, Input, Icon, Button } from 'antd'
import { context } from '../../contexts'
import { resetfetch } from '../../contexts/fetch_data'

export default function AdminResetPassword(props) {
    const {setauth} = context()
    const [loading, setloading] = useState(false)
    const [errors,seterrors] = useState({})
    const ref_email = useRef()
    const ref_password = useRef()
    const ref_password_confirmation = useRef()
    const password_status = errors.password && {
        validateStatus : 'error',
        help:errors.password[0]
    }
    const password_confirmation_status = errors.password_confirmation && {
        validateStatus : 'error',
        help:errors.password_confirmation[0]
    }
    const email_status = errors.email && {
        validateStatus : 'error',
        help:errors.email[0]
    }
    const handleClick = () => {
        const password = ref_password.current.input.value
        const password_confirmation = ref_password_confirmation.current.input.value
        const email = ref_email.current.input.value
        const guard = props.match.params.guard ? "/"+props.match.params.guard : ""
        setloading(true)
        resetfetch(email,password,password_confirmation,props.match.params.token,guard)
        .then(res=>{
            setauth(res.data)
            setloading(false)
        })
        .then(()=>{
            props.history.push('/')
        })
        .catch(res=>{
            seterrors(res.response.data.errors)
            setloading(false)
        })
    }
    return (
        <Form className="login-form">
            <Form.Item {...email_status}>
                <Input prefix={<Icon type="mail" />} placeholder="Email" ref={ref_email} />
            </Form.Item>
            <Form.Item {...password_status}>
                <Input.Password prefix={<Icon type="lock" />} placeholder="password" ref={ref_password} />
            </Form.Item>
            <Form.Item {...password_confirmation_status}>
                <Input.Password prefix={<Icon type="lock" />} placeholder="password" ref={ref_password_confirmation} />
            </Form.Item>
            <Button loading={loading} type="primary" style={{ width: '100%' }} onClick={handleClick}>Reset Password</Button>
        </Form>
    )
}