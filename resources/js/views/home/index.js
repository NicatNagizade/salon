import React from 'react'
import { context } from '../../contexts'

export default function Home(){
    const {t} = context()
    return(
        <div>
            {t.esas_sehife}
        </div>
    )
}