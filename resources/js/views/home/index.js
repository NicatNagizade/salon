import React from 'react'
import { context } from '../../contexts'
import Slide from './slide'
import { Divider } from 'antd'
import Vips from './vip'

export default function Home() {
    const { t } = context()
    return (
        <div>
            {t.esas_sehife}
            <Slide />
            <Divider />
            <Vips />
        </div>
    )
}