import React, { useState, useRef } from 'react'
import { Form, Input, Icon, Button, notification } from 'antd'
import { forgotfetch } from '../../contexts/fetch_data'

export default function ForgotPassword() {
    const [loading, setloading] = useState(false)
    const [error,seterror] = useState({})
    const ref_email = useRef()
    const email_status = error.email && {
        validateStatus : 'error',
        help:error.email[0],
        hasFeedback:true
    }
    const openNotification = () => {
        notification.open({
          message: 'Bildiriş',
          description:
            'Email ünvanınıza bildiriş göndərildi',
          icon: <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />,
        });
      };
    const handleClick = () => {
        const email = ref_email.current.input.value
        setloading(true)
        forgotfetch(email)
        .then(()=>{
            openNotification()
        })
        .catch(res=>{
            res.response &&
            seterror(res.response.data.errors)
        })
        .finally(()=>{
            setloading(false)
        })
    }
    return (
        <Form className="login-form">
            <Form.Item {...email_status}>
                <Input prefix={<Icon type="mail" />} placeholder="Email" ref={ref_email} />
            </Form.Item>
            <Button loading={loading} type="primary" style={{ width: '100%' }} onClick={handleClick}>Send Email</Button>
        </Form>
    )
}