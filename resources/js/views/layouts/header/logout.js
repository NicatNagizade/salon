import React, { useState } from 'react'
import { context } from '../../../contexts'
import { logoutfetch } from '../../../contexts/fetch_data'

export default function Logout(){
    const {setauth,t,setloading} = context()
    const handleClick=()=>{
        setloading(true)
        logoutfetch()
        .then(()=>{
            setauth('')
        })
        .finally(()=>{
            setloading(false)
        })
    }
    return(
        <a onClick={handleClick}>{t.cixis}</a>
    )
}