import React from 'react'
import { context } from '../../../contexts'
import {useHistory} from 'react-router-dom'
import { guardNamefetch } from '../../../contexts/fetch_data'

export default function HeaderProfile(){
    const {t,setloading} = context()
    const history = useHistory()
    const handleClick = ()=>{
        setloading(true)
        guardNamefetch()
        .then(res=>{
            const guard = res.data
            setloading(false)
            history.push(`/${guard}/profile`);
        })
    }
    return(
        <a onClick={handleClick}>{t.profil}</a>
    )
}