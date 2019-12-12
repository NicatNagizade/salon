import React, { useState, useEffect } from 'react'
import { context } from '../../../contexts'
import {useHistory} from 'react-router-dom'

export default function UserProfile(){
    const {t,auth} = context()
    const history = useHistory()
    useEffect(()=>{
        if(!(auth.id > 0)){
            history.push('/')
        }
    },[auth])
    return(
        <div>
            Name: {auth.ad}<br/>
            LastName: {auth.soyad}
        </div>
    )
}