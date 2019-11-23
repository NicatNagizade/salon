import React, {createContext,useContext, useState, useEffect} from 'react'
import Axios from 'axios'
import Loading from '../components/loading'
import { authfetch, langfetch } from './fetch_data'

const MyContext = createContext()
const Provider = MyContext.Provider
const context = ()=>{
    return useContext(MyContext)
}
export {context}

export default function IndexProvider({children}){
    const [t,sett] = useState({})
    const [lang,setlang] = useState('az')
    const [auth,setauth] = useState('')
    const [loading,setloading] = useState(true)
    useEffect(()=>{
        authfetch()
        .then(res=>{
            setauth(res.data)
        })
    },[])
    useEffect(()=>{
        setloading(true)
        langfetch(lang)
        .then(res=>{
            sett(res.data)
            setloading(false)
        })
    },[lang])
    console.log(auth)
    const data = {setlang,t,setauth,auth}
    return(
        <div>
            {loading && <Loading start={22} />}
            <Provider value={data}>
                {children}
            </Provider>
        </div>
    )
}