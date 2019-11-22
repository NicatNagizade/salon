import React, { useState } from 'react'
import { Select } from 'antd'
import Axios from 'axios';
const { Option } = Select

export default function MySearch() {
    const [timeout, settime] = useState(0)
    const [loading,setloading] = useState(false)
    const [data, setdata] = useState([])
    const handleSearch = e => {
        setloading(true)
        if (timeout) clearTimeout(timeout)
        if(!e){
            setloading(false)
            setdata([])
            return
        }
        settime(setTimeout(() => {
            Axios.get('/search',{params:{soz : e}})
                .then(res => {
                    res.data&&
                    setdata(res.data)
                })
                .finally(()=>{
                    setloading(false)
                })
        }, 500))
    }
    const handleChange = e => {
        console.log(e)
    }
    const option = data.map(d => {
        return <Option key={d}>{d}</Option>
    })
    return (
        <Select showArrow={false}
            filterOption={false} 
            showSearch
            value="search ..."
            style={{ width: '150px' }} 
            onChange={handleChange}
            onSearch={handleSearch}
            loading={loading}
            defaultActiveFirstOption={false}
            notFoundContent={null}
            >
            {option}
        </Select>
    )
}