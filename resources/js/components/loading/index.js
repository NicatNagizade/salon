import React, { useState, useEffect } from 'react'
import { Progress } from 'antd'

export default function Loading({start = 0}){
    const [percent,setpercent] = useState(start)
    const interval = setTimeout(() => {
        setpercent(percent+19)
    }, 1000)
    if(parseInt(percent)>80){
        clearTimeout(interval)
    }
    useEffect(()=>{
        return()=>{
            clearTimeout(interval)
        }
    })
    return(
        <Progress percent={parseInt(percent)} size="small" status="active" />
    )
}