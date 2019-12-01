import React, { useState, useEffect } from 'react'
import { userIdfetch } from '../../../contexts/fetch_data'
import { Avatar } from 'antd'
import Img from '../../../components/image'

export default function UserInfo(props){
    const {id} = props.match.params
    const [data,setdata] = useState('')
    useEffect(()=>{
        userIdfetch(id)
        .then(res=>{
            setdata(res.data)
        })
    },[])
    return(data &&
        <div className="salon-info"> 
            <Img src={data.sekil} className="salon-info-sekil" />
            <div className="salon-info-ust">
                <Avatar>{data.logo}</Avatar>
                <div className="salon-ad">{data.ad}</div>
                <div className="salon-adres">{data.adres}</div>
                <div className="salon-adres">{data.telefon}</div>
            </div>
        </div>
    )
}