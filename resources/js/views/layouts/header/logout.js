import React, { useState } from 'react'
import { Button } from 'antd'
import Axios from 'axios'
import { context } from '../../../contexts'

export default function Logout(){
    const {setauth,t} = context()
    const [loading,setloading] = useState(false)
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
        <Button onClick={handleClick} loading={loading}>{t.cixis}</Button>
    )
}