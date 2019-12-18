import React from 'react'
import { context } from '../../../contexts'
import {useHistory} from 'react-router-dom'

export default function HeaderProfile(){
    const {t,auth} = context()
    const history = useHistory()
    const handleClick = ()=>{
        history.push(`/${auth.guard}/profile`);
    }
    return(
        <a onClick={handleClick}>{t.profil}</a>
    )
}