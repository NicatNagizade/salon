import React from 'react'
import Img from '../../../components/image'
import { context } from '../../../contexts'

export default function UserSekiller({ data }) {
    const {t} = context()
    return (
        <div>
            <h4>{t.sekiller}</h4>
            {
                data.map((d) => {
                    return (
                        <div key={d.id}>
                            <Img className="user-profile-sekiller" src={d.sekil} />
                        </div>
                    )
                })
            }
        </div>
    )
}