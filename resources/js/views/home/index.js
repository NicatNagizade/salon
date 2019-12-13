import React from 'react'
import Slide from './slide'
import { Divider } from 'antd'
import Vips from './vip'

export default function Home() {
    return (
        <div>
            <Slide />
            <Divider />
            <Vips />
        </div>
    )
}