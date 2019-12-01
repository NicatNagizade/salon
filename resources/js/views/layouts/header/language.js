import React from 'react'
import { Select } from 'antd'
import { context } from '../../../contexts'
const {Option} = Select

export default function HeaderLang() {
    const {lang,setlang} = context()
    const handleChange=e=>{
        setlang(e)
    }
    return (
        <Select defaultValue={lang} style={{ width: 60 }} showArrow={false} onChange={handleChange}>
            <Option value="az">az <img src="/images/flags/az.png" width={15} height={15} /></Option>
            <Option value="en">en <img src="/images/flags/en.png" width={15} height={15} /></Option>
        </Select>
    )
}