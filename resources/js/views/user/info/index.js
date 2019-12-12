import React, { useState, useEffect } from 'react'
import { userIdfetch } from '../../../contexts/fetch_data'
import { Avatar } from 'antd'
import Img from '../../../components/image'
import {Route} from 'react-router-dom'
import NotFound from '../../not_found'

export default function UserInfo(props){
    const {id} = props.match.params
    const [data,setdata] = useState('')
    const [check,setcheck] = useState(true)
    useEffect(()=>{
        if(id > 0){
            userIdfetch(id)
            .then(res=>{
                if(!res.data.id){
                    setcheck(false)
                }
                setdata(res.data)
            })
        }else{
            setcheck(false)
        }
    },[id])
    return(check ? data && 
        <div className="salon-info"> 
            <Img src={data.sekil} className="salon-info-sekil" />
            <div className="salon-info-ust">
                <Avatar>{data.logo}</Avatar>
                <div className="salon-ad">{data.ad}</div>
                <div className="salon-adres">{data.adres}</div>
                <div className="salon-adres">{data.telefon}</div>
            </div>
        </div>
        :
        <Route component={NotFound} />
    )
}