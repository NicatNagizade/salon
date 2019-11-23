import React, { useState, useEffect } from 'react'
import { Progress } from 'antd'

export default function Loading({start = 0, ...props}){
    const [percent,setpercent] = useState(start)
    useEffect(()=>{
        const timer = setTimeout(() => {
            setpercent(percent+19)
        }, 1000);
        if(percent>80) clearTimeout(timer)
        return()=> clearTimeout(timer)
    },[percent])
    return(
        <Progress {...props} percent={parseInt(percent)} size="small" status="active" />
    )
}