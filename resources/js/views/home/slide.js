import React from 'react'
import { Carousel } from 'antd'
import Img from '../../components/image'

export default function Slide() {
    return (
        <Carousel autoplay draggable className="my-slide">
            <Img src="/images/users/1.jpg" />
            <Img src="/images/users/2.jpg" />
            <Img src="/images/users/3.jpg" />
            <Img src="/images/users/4.jpg" />
        </Carousel>
    )
}