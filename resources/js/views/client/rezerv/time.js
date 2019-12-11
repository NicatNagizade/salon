import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import moment from 'moment'

export default function TimeCalendar({data = [],day = 0}) {
    const [button_date, setbutton_date] = useState([])
    const step_minute = 30
    useEffect(()=>{
        const now_time = moment('00:00','HH:mm').subtract(step_minute,'minutes');
        let arr =[]
        for(let i=0;i<(24*(60/step_minute));i++){
            const t = now_time.add(step_minute,'minutes').format('HH:mm')
            arr.push(t)
        }
        setbutton_date(arr)
    },[])
    return (
        <div className="rezerv-times">
            {button_date.map((b,i)=>{
                let res = {}
                const m = moment(b,'HH:mm')
                // if(m.isBefore(moment()) && day == 0){
                //     return <Button key={i}>{' '}</Button>
                // }
                data.map(d => {
                    if(d.tarix != moment().add(day,'days').format('YYYY-MM-DD')) return
                    const basla = moment(d.baslama,'HH:mm:ss').format('HH:mm')
                    const bit = moment(d.baslama,'HH:mm:ss').add(30,'minutes').format('HH:mm')
                    const baslama = moment(basla,'HH:mm')
                    const bitme = moment(bit,'HH:mm')
                    const yoxlama = m.isBetween(baslama,bitme)
                    const yoxlama2 = m.add(step_minute,'minutes').isBetween(baslama,bitme)
                    if(yoxlama || yoxlama2){
                        res = {
                            type:'danger'
                        }
                        return
                    }
                });
                return <Button {...res} key={`${b}`}>{b}</Button>
            })}
        </div>
    )
}