import React, { useState, useRef } from 'react'
import { Select } from 'antd'
import { context } from '../../contexts';
import { searchfetch } from '../../contexts/fetch_data';
const { Option } = Select

export default function MySearch(props) {
    const {t} = context()
    const {path='/user',time=500, placeholder = `${t.axtaris} ...`,valueChange = true, onSelect,...res} = props
    const [timeout, settime] = useState(0)
    const [value,setvalue] = useState()
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
            searchfetch(path, e)
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
        onSelect(e)
        if(!valueChange){
            setvalue({value:placeholder})
        }
    }
    const option = data.map(d => {
        return <Option key={d.id}>{d.name}</Option>
    })
    return (
        <Select showArrow={false}
            filterOption={false} 
            showSearch
            placeholder={placeholder}
            {...value}
            onChange={handleChange}
            onFocus={handleSearch}
            onSearch={handleSearch}
            loading={loading}
            defaultActiveFirstOption={false}
            notFoundContent={null}
            {...res}
            >
            {option}
        </Select>
    )
}