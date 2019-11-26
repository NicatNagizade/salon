import React, { useState } from 'react'
import { Spin } from 'antd'

export default function Img({src,...props}){
    const [loading,setloading] = useState(true)
    const [image,setimage] = useState(src)
    const handleLoad=()=>{
        setloading(false)
    }
    const handleError =()=>{
        setimage('/images/not_available.jpg')
    }
    return(
        <Spin className={props.className} style={props.style} spinning={loading}>
            <img {...props} src={image} onLoad={handleLoad} onError={handleError} />
        </Spin>
    )
}