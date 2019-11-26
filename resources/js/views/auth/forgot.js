import React, { useState, useRef } from 'react'
import { Form, Input, Icon, Button } from 'antd'
import Axios from 'axios'

export default function ForgotPassword() {
    const [loading, setloading] = useState(false)
    const [error,seterror] = useState({})
    const ref_email = useRef()
    const email_status = error.email && {
        validateStatus : 'error',
        help:error.email[0]
    }
    const handleClick = () => {
        const email = ref_email.current.input.value
        setloading(true)
        Axios.post('/password/email',{email})
        .then(res=>{
            console.log(res.data)
        })
        .catch(res=>{
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