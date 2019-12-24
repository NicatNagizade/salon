import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Button, Select } from 'antd'
import {useHistory} from 'react-router-dom'
import { context } from '../../../contexts'
const { Option } = Select

export default function AdminShow(props) {
    const {auth} = context()
    const { id } = props.match.params
    const [data, setData] = useState()
    const [edit, setEdit] = useState(false)
    const [select,setSelect] = useState()
    const roles = ['master','super','editor','helper']
    const history = useHistory()
    useEffect(() => {
        if(auth.role != 'master'){
            history.push('/admin')
        }else{
            Axios.post('/admin/profile/' + id)
                .then(res => {
                    setData(res.data)
                    setSelect(res.data.role)
                })
        }
    }, [])
    const handleClickEdit = () => {
        setEdit(true)
    }
    const handleClickOk =()=>{
        setEdit(false)
        setData({...data,role:select})
        Axios.post('/admin/edit/'+id,{role:select})
    }
    const handleChange = e =>{
        setSelect(e)
    }
    const handleDelete = ()=>{
        Axios.post('/admin/delete/'+id)
        .then(()=>{
            history.push('/admin/admin')
        })
    }
    const Role = () => {
        return (!edit ?
            <div>Role : {data.role} <Button onClick={handleClickEdit}>Edit</Button> </div>
            : <div>Role :
                <Select style={{ width: '100px' }} onChange={handleChange} value={select}>
                    {
                        roles.map(d => {
                            return <Option key={d}> {d} </Option>
                        })
                    }
                </Select>
                <Button onClick={handleClickOk}>Ok</Button></div>
        )
    }
    return (data ?
        <div className="admin-profile">
            <div>Name : {data.name}</div>
            <div>Email : {data.email}</div>
            <Role />
            <div>updated_at : {data.updated_at}</div>
            <Button type="danger" onClick={handleDelete}>DELETE</Button>
        </div>
        : ''
    )
}