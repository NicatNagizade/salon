import Axios from "axios"

const authfetch = () => Axios.get('/init')
const langfetch = (lang) => Axios.get(`/data/lang/${lang}.json`)
const salonlarfetch = (page=1) => Axios.get('/api/salon',{params:{page:page}})
const vipsfetch =()=> Axios.get('/api/vips')
const salonIdfetch = (id) => Axios.get('/api/salon/'+id)
const userIdfetch = (id) => Axios.get('/api/user/'+id)
const searchfetch = (path,soz)=>Axios.get('/api/search'+path,{params:{soz}})
const resetfetch = (email,password,password_confirmation,token,path = '') => Axios.post(path+'/password/reset',{email,password,password_confirmation,token})
const forgotfetch = (email,path = '') => Axios.post(path + '/password/email',{email})
const rezervDatafetch = (e) => Axios.get('/api/user/rezerv_data/'+e);

export {authfetch,langfetch,salonlarfetch,vipsfetch,salonIdfetch,
    userIdfetch,searchfetch,resetfetch,forgotfetch,rezervDatafetch }