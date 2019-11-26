import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import Loading from '../components/loading'
import { authfetch, langfetch } from './fetch_data'

const MyContext = createContext()
const Provider = MyContext.Provider
const context = () => {
    return useContext(MyContext)
}
export { context }

export default function IndexProvider({ children }) {
    const [t, sett] = useState({})
    const [lang, setlang] = useState('az')
    const [auth, setauth] = useState('')
    const [loading, setloading] = useState(true)
    const data = { setlang, t, setauth, auth,setloading }
    useEffect(() => {
        authfetch()
            .then(res => {
                setauth(res.data)
            })
    }, [])
    useEffect(() => {
        setloading(true)
        langfetch(lang)
            .then(res => {
                sett(res.data)
                setloading(false)
            })
    }, [lang])
    console.log(auth)
    return (
        <div>
            {loading && <Loading style={{position:'fixed',zIndex:'999',top:'-10px'}} start={22} />}
            {useMemo(() => {
                return (
                    <Provider value={data}>
                        {children}
                    </Provider>)
            }, [t, auth])}
        </div>
    )
}