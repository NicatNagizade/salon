import React, { useRef, useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import { Input, Form, Button, Icon,Checkbox, Radio } from 'antd'
import { context } from '../../contexts'
import { loginfetch } from '../../contexts/fetch_data'

export default function Login(){
    const history = useHistory()
    const {setauth,t} = context()
    const ref_email = useRef()
    const ref_password = useRef()
    const ref_remember = useRef()
    const ref_guard = useRef()
    const [loading,setloading] = useState(false)
    const [errors, seterrors] = useState({email:'',password:''})
    const email_status = errors.email && {
        validateStatus : 'error',
        help:errors.email[0]
    }
    const password_status = errors.password && {
        validateStatus : 'error',
        help:errors.password[0]
    }
    const handleClick=()=>{
        setloading(true)
        const email = ref_email.current.input.value
        const password = ref_password.current.input.value
        const remember = ref_remember.current.rcCheckbox.state.checked ? true : null;
        const guard = ref_guard.current.state.value
        loginfetch(email,password,remember,guard)
        .then(res=>{
            setloading(false)
            if(res.data.error){
                seterrors({email:[res.data.error]})
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
    const onEnter = e =>{
        if(!loading && e.keyCode == 13){
            handleClick()
        }
    }
    return(
        <Form className="login-form" onKeyUp={onEnter}>
            <Form.Item {...email_status}>
                <Input prefix={<Icon type="mail" />} placeholder="Email" ref={ref_email}/>
            </Form.Item>
            <Form.Item {...password_status}>
                <Input.Password prefix={<Icon type="lock" />} placeholder="Password" ref={ref_password} />
            </Form.Item>
            <Form.Item>
            <Radio.Group ref={ref_guard} defaultValue="/client">
                    <Radio value="/client">İstifadəçi</Radio>
                    <Radio value="">İşçi</Radio>
            </Radio.Group><br />
                <Checkbox ref={ref_remember}>{t.xatirla}</Checkbox>
                <Link style={{float:'right'}} to="/forgot">
                    Forgot password
                </Link>
                <Button loading={loading} type="primary" style={{width:'100%'}} onClick={handleClick}>Login</Button>
                Or <Link to="/register">register now!</Link>
            </Form.Item>
        </Form>
    )
}