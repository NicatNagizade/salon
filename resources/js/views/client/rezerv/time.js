import React, { useState, useEffect } from 'react'
import { Button } from 'antd'

export default function TimeCalendar({data = []}) {
    const [hours,sethours] = useState([])
    const [minutes,setminutes] = useState([])
    useEffect(()=>{
        let h =[]
        for(let i = 0; i<24 ; i++){
            h.push(i)
        }
        sethours(h)
        let m =[]
        for(let i = 0; i<60 ; i+=30){
            const t = i<10 ? '0'+i : i
            m.push(t)
        }
        setminutes(m)
        // data.forEach(d => {
        //     const tarix = d.tarix + ' ' + d.baslama
        //     const vaxt = new Date(tarix)
        //     const unix = vaxt.getTime()
        // });
    },[])
    return (
        <div className="rezerv-times">
            {hours.map((h)=>{
                return minutes.map((m)=>{
                    return <Button key={`${h}:${m}`}>{h}:{m}</Button>
                })
            })}
        </div>
    )
}