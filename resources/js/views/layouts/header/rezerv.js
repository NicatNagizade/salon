import React from 'react'
import { Button } from 'antd'
import {Link} from 'react-router-dom'

export default function RezervLink(){
    return(
        <Link to="/client/rezerv">
            <Button>Rezerv</Button>
        </Link>
    )
}