import Axios from "axios"

const authfetch = () => Axios.get('/init')
const langfetch = (lang) => Axios.get(`/data/lang/${lang}.json`)
const salonlarfetch = (page=1) => Axios.get('/api/salon',{params:{page:page}})
const vipsfetch =()=> Axios.get('/api/vips')
const salonIdfetch = (id) => Axios.get('/api/salon/'+id)
const searchfetch = (path,soz)=>Axios.get(path,{params:{soz}})
export {authfetch,langfetch,salonlarfetch,vipsfetch,salonIdfetch,searchfetch}