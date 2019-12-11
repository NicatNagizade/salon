import React, { useState } from 'react'
import { Button } from 'antd'
import Axios from 'axios'
import { context } from '../../../contexts'

export default function Logout(){
    const {setauth,t,setloading} = context()
    const handleClick=()=>{
        setloading(true)
        Axios.post('/client/logout')
        .then(()=>{
            setauth('')
        })
        .finally(()=>{
            setloading(false)
        })
    }
    return(
        <a onClick={handleClick}>{t.cixis}</a>
    )
}