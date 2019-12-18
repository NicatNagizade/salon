import React, { useState, useEffect } from 'react'
import { context } from '../contexts'
import {useHistory} from 'react-router-dom'

export default function Admin(){
    const {auth} = context()
    const history = useHistory()
    useEffect(()=>{
        if(auth.guard != "admin"){
            history.push("/admin/login")
        }
    },[auth])
    return(
        <div>
            Admin
        </div>
    )
}