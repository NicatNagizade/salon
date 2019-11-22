import React, {createContext,useContext, useState, useEffect} from 'react'
import Axios from 'axios'
import Loading from '../components/loading'

const MyContext = createContext()
const Provider = MyContext.Provider
const context = ()=>{
    return useContext(MyContext)
}
export {context}

export default function IndexProvider(props){
    const [t,sett] = useState('')
    const [lang,setlang] = useState('az')
    const [loading,setloading] = useState(true)
    const [auth,setauth] = useState('')
    useEffect(()=>{
        setloading(true)
        Axios.get('/init')
        .then(res=>{
            setauth(res.data)
        })
        .finally(()=>{
            setloading(false)
        })
    },[])
    useEffect(()=>{
        setloading(true)
        Axios.get(`/data/lang/${lang}.json`)
        .then(res=>{
            sett(res.data)
        })
        .finally(()=>{
            setloading(false)
        })
    },[lang])
    console.log(auth)
    const data = {setlang,t,setauth}
    return(
        <Provider value={data}>
            {loading && <Loading />}
            {props.children}
        </Provider>
    )
}