import React, { useState, useEffect } from 'react'
import Vip from '.'
import Axios from 'axios'

export default function VipUsers(){
    const [data,setdata] = useState(false)
    useEffect(()=>{
        Axios.get('/vip/users')
        .then(res=>{
            setdata(res.data)
        })
        return()=>{
            setdata(false)
        }
    },[])
    return(data &&
        <Vip data={data} />
    )
}