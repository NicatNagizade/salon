import React from 'react'
import Lists from './list'

export default function VipSalons({data}){
    return(
        <Lists data={data} path="salon" />
    )
}