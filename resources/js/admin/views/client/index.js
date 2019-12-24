import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Table, Popconfirm, Button, Pagination } from 'antd'

export default function AdminClients() {
    const [data, setData] = useState()
    const [page, setPage] = useState(1)
    const [lastPage,setLastPage] = useState(1)
    useEffect(() => {
        Axios.post('/admin/clients?page='+page)
            .then(res => {
                setData(res.data.data)
                setLastPage(res.data.last_page)
            })
    }, [page])
    const handleDelete = id => {
        Axios.post('/admin/client/delete/'+id)
        setData(data.filter(d=>d.id!=id)) 
    }
    const handleChange=e=>{
        setPage(e)
    }
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Ad',
            dataIndex: 'ad',
            key: 'ad',
        },
        {
            title: 'Soyad',
            dataIndex: 'soyad',
            key: 'soyad',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Cins',
            dataIndex: 'cins',
            key: 'cins',
        },
        {
            title: 'Telefon',
            dataIndex: 'telefon',
            key: 'telefon',
        },
        {
            title: 'Delete',
            key: 'delete',
            render: (text) => {
                return (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(text.id)}>
                        <Button>DELETE</Button>
                    </Popconfirm>
                )
            }
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={data} rowKey="id" size="small" />
            <Pagination onChange={handleChange} style={{margin:"20px 100px"}} size="small" defaultCurrent={1} total={lastPage*10} />
        </div>
    )
}