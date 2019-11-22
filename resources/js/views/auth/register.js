import React, { useRef, useState } from 'react'
import { Form, Input, Button, Icon } from 'antd'
import Axios from 'axios'
import { context } from '../../contexts'

export default function Register({history,path=''}){
    const {setauth} = context()
    const [loading,setloading] = useState(false)
    const [errors,seterrors] = useState({name:'',email:'',password:''})
    const email_status = errors.email && {
        validateStatus : 'error',
        help:errors.email[0]
    }
    const name_status = errors.name && {
        validateStatus : 'error',
        help:errors.name[0]
    }
    const password_status = errors.password && {
        validateStatus : 'error',
        help:errors.password[0]
    }
    const ref_name = useRef()
    const ref_email = useRef()
    const ref_password = useRef()
    const ref_password_confirmation = useRef()
    const handleClick=()=>{
        setloading(true)
        const name = ref_name.current.input.value
        const email = ref_email.current.input.value
        const password = ref_password.current.input.value
        const password_confirmation = ref_password_confirmation.current.input.value
        Axios.post(path+'/register',{name,email,password,password_confirmation})
        .then(res=>{
            setloading(false)
            if(res.data.error){
                seterrors({name:[res.data.error]})
                return
            }
            setauth(res.data)
            history.push('/')
        })
        .catch(res=>{
            setloading(false)
            seterrors(res.response.data.errors)
        })
    }
    return(
        <Form className="login-form">
            <Form.Item {...name_status}>
                <Input prefix={<Icon type="user" />} placeholder="Name" ref={ref_name} />
            </Form.Item>
            <Form.Item {...email_status}>
                <Input prefix={<Icon type="mail" />} placeholder="Email" ref={ref_email} />
            </Form.Item>
            <Form.Item {...password_status}>
                <Input.Password prefix={<Icon type="lock" />} placeholder="Password" ref={ref_password} />
            </Form.Item>
            <Form.Item>
                <Input.Password prefix={<Icon type="lock" />} placeholder="Password Confirmation" ref={ref_password_confirmation} />
            </Form.Item>
            <Form.Item>
                <Button loading={loading} type="primary" style={{width:'100%'}} onClick={handleClick}>Register</Button>
            </Form.Item>
        </Form>
    )
}