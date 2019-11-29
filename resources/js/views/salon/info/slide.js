import React from 'react'
import { Carousel } from 'antd'
import Img from '../../../components/image'

export default function Slide({sekiller}) {
    return (
        <Carousel autoplay draggable className="my-slide">
            {
                sekiller.map((data,i)=>{
                    const {sekil,basliq} = data
                    return (
                        <div key={i} className="salon-slide">
                            <Img src={sekil} />
                            <span className="salon-slide-basliq">{basliq}</span>
                        </div>
                    )
                })
            }
        </Carousel>
    )
}