import React from 'react'
import MySearch from '../../../components/search';
import {useHistory} from 'react-router-dom'

export default function HeaderSearch(){
    const history = useHistory();
    const onSelect=(e)=>{
        const data = e.split(':')
        history.push(`/${data[0]}/${data[1]}`)
    }
    return(
        <MySearch path="/umumi" style={{width:'150px'}} valueChange={false} onSelect={onSelect}/>
    )
}