import React, { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import { Input, Icon, Button, Select } from 'antd'
const { Option } = Select

export default function AdminAxtaris() {
    const [data, setData] = useState('')
    const refSearch = useRef()
    const refId = useRef()
    const refSelect = useRef()
    const [loading, setLoading] = useState(false)
    useEffect(() => {

    }, [])
    console.log(data)
    const handleSearch = () => {
        setLoading(true)
        const search = refSearch.current.input.value
        const id = refId.current.input.value
        const select = refSelect.current.rcSelect.state.value[0]
        Axios.post('/admin/axtaris', { soz: search, id, select })
            .then(res => {
                setData(res.data)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    function MyMap({ par, title = "" }) {
        return (
            <div>
                <h4>{title}</h4>
                {
                    par.map((d, i) => {
                        return (
                            <div key={i}>
                                <span>{d.id} </span>
                                <span>{d.ad} </span>
                                <span>{d.soyad || ''} </span>
                                <span>{d.adres || ''} </span>
                                <span>{d.telefon || ''} </span>
                            </div>
                        )
                    })
                }
            </div>

        )

    }
    return (
        <div>
            <div className="admin-axtaris">
                <Select ref={refSelect} style={{ width: '100px' }} defaultValue="umumi">
                    <Option key="umumi">Umumi</Option>
                    <Option key="isci">Isci</Option>
                    <Option key="client">Client</Option>
                    <Option key="salon">Salon</Option>
                    <Option key="kataloq">Kataloq</Option>
                </Select>
                <Input ref={refSearch} style={{ width: '180px' }}
                    addonAfter={<Icon type="search" />}
                    placeholder="Axtardiginiz soz" />
                <Input type="number" ref={refId} style={{ width: '100px' }}
                    addonAfter={<Icon type="search" />}
                    placeholder="ID" />
                <Button onClick={handleSearch} loading={loading}>Axtar</Button>
            </div>
            <div className="admin-axtaris-show">
                {data &&
                    ((data.user || data.salon || data.kataloq || data.client)
                        ? <div>
                            {data.user && <MyMap par={data.user} title="isci" />}
                            {data.client && <MyMap par={data.client} title="client" />}
                            {data.salon && <MyMap par={data.salon} title="salon" />}
                            {data.kataloq && <MyMap par={data.kataloq} title="kataloq" />}
                        </div>
                        :
                        <MyMap par={data} />
                    )}
            </div>
        </div>
    )
}