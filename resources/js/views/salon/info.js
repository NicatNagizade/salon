import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Img from '../../components/image'
import { salonIdfetch } from '../../contexts/fetch_data'

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
            {data.ad},{data.adres}
            <div>
                <Img src={data.sekil} />
            </div>
        </div>
    )
}