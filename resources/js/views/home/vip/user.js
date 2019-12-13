import React from 'react'
import Lists from './list'

export default function VipUsers({data}){
    return(
        <Lists data={data} path="user"/>
    )
}