import React, { useRef, useState, useEffect } from 'react'
import { Input, Button, Select, Divider } from 'antd'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
import { context } from '../../../contexts'
const { Option } = Select

export default function AdminDatabase() {
    const {auth} = context()
    const refInput = useRef()
    const refSelect = useRef()
    const [tables,setTables] = useState()
    const [data,setData] = useState()
    const history = useHistory()
    useEffect(()=>{
        if(auth.role != 'master'){
            history.push('/admin')
        }else{
            Axios.post('/admin/tables')
            .then(res=>{
                setTables(res.data)
            })
        }
    },[])
    const handleClick = () => {
        const select = refSelect.current.rcSelect.state.value[0]
        const input = refInput.current.state.value
        Axios.post('/admin/query', { query: input, select })
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
    }
    const clickTable = table=>{
        const input = "SELECT * FROM "+table+" LIMIT 100"
        Axios.post('/admin/query', { query: input, select:'select' })
        .then(res => {
            console.log(res.data)
            console.log(table)
            setData(res.data)
        })
    }
    const enter = (e) => {
        if (e.keyCode == 13) {
            handleClick()
        }
    }
    const Tables = ()=>{
        return(
            <div>
                {tables &&
                    tables.map((t,i)=>{
                        return <Button key={i} onClick={()=>clickTable(t)}>{t}</Button>
                    })
                }
            </div>
        )
    }
    const Query = () =>{
        return (data?
            <div>
                <Divider />
                {
                    data.map((d,i)=>{
                        return <div key={i}><strong>{i+1}</strong>{JSON.stringify(d)}</div>
                    })
                }
            </div>
            :''
        )
    }
    return (
        <div onKeyUp={enter} className="admin-query">
            <Tables />
            <Select ref={refSelect} style={{ width: "100px" }} defaultValue="select" >
                <Option key="select">Select</Option>
                <Option key="other">Other</Option>
            </Select>
            <Input ref={refInput} style={{ width: "500px" }} placeholder="query" />
            <Button onClick={handleClick}>GO</Button>
            <Query />
        </div>
    )
}