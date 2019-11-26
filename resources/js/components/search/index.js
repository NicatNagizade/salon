import React, { useState, useRef } from 'react'
import { Select } from 'antd'
import { context } from '../../contexts';
import { searchfetch } from '../../contexts/fetch_data';
const { Option } = Select

export default function MySearch({path='/search',time=500,...props}) {
    const {t} = context()
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
            searchfetch(path,e)
                .then(res => {
                    res.data&&
                    setdata(res.data)
                })
                .finally(()=>{
                    setloading(false)
                })
        }, time))
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
            value={`${t.axtaris} ...`}
            style={{ width: '150px' }} 
            onChange={handleChange}
            onFocus={handleSearch}
            onSearch={handleSearch}
            loading={loading}
            defaultActiveFirstOption={false}
            notFoundContent={null}
            {...props}
            >
            {option}
        </Select>
    )
}