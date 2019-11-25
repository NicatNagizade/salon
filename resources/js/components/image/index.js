import React, { useState } from 'react'
import { Spin } from 'antd'

export default function Img(props){
    const [loading,setloading] = useState(true)
    const handleLoad=()=>{
        setloading(false)
    }
    return(
        <Spin spinning={loading}>
            <img {...props} onLoad={handleLoad} />
        </Spin>
    )
}