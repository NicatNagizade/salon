import React, {useRef} from 'react'
import { Input, Button } from 'antd'

export default function AdminDatabase(){
    const refSelect = useRef()
    const handleClick =()=>{
        console.log(refSelect)
    }
    return(
        <div>
            <select ref={refSelect}>
                <option>Other</option>
                <option>Select</option>
            </select>
            <Input style={{width:"500px"}} placeholder="query" />
            <Button onClick={handleClick}>GO</Button>
        </div>
    )
}