import React, { useState, useEffect } from 'react'
import { salonIdfetch } from '../../../contexts/fetch_data'
import Slide from './slide'

export default function SalonInfo(props){
    const {id} = props.match.params
    const [data,setdata] = useState('')
    useEffect(()=>{
        salonIdfetch(id)
        .then(res=>{
            setdata(res.data)
        })
    },[])
    return(data &&
        <div>
            <Slide sekiller={data.sekiller} />
            {data.ad},{data.adres}
        </div>
    )
}