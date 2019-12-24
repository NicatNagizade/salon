import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Table, Button, Pagination } from 'antd'
import {useHistory, Link} from 'react-router-dom'
import { context } from '../../../contexts'

export default function AdminsShow() {
    const {auth} = context()
    const [data, setData] = useState()
    const [page, setPage] = useState(1)
    const [lastPage,setLastPage] = useState(1)
    const history = useHistory()
    useEffect(() => {
        if(auth.role != 'master'){
            history.push('/admin')
        }else{
            Axios.post('/admin/admins?page='+page)
                .then(res => {
                    setData(res.data.data)
                    setLastPage(res.data.last_page)
                })
        }
    }, [page])
    const handleChange=e=>{
        setPage(e)
    }
    const handleClick = (id)=>{
        history.push('/admin/admin/'+id)
    }
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Delete',
            key: 'delete',
            render: (text) => {
                return (
                    <Button onClick={()=>handleClick(text.id)}>Profile</Button>
                )
            }
        },
    ];
    return (
        <div>
            <div><Link to="/admin/register">Create Admin</Link></div>
            <Table columns={columns} dataSource={data} rowKey="id" size="small" />
            <Pagination onChange={handleChange} style={{margin:"20px 100px"}} size="small" defaultCurrent={1} total={lastPage*10} />
        </div>
    )
}