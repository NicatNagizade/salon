import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import Loading from '../components/loading'
import { authfetch, langfetch } from './fetch_data'
import Cookies from 'js-cookie'

const MyContext = createContext()
const Provider = MyContext.Provider
const context = () => {
    return useContext(MyContext)
}
export { context }

export default function IndexProvider({ children }) {
    const dil = Cookies.get('lang') ? Cookies.get('lang') : 'az'
    const [t, sett] = useState({})
    const [lang, setlang] = useState(dil)
    const [auth, setauth] = useState('')
    const [loading, setloading] = useState(true)
    const data = { lang,setlang, t, setauth, auth,setloading }
    const render_memo = [t,auth]
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
                Cookies.set('lang',lang,{expires:7})
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
            }, render_memo)}
        </div>
    )
}