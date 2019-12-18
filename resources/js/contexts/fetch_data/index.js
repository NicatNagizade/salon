import Axios from "axios"

const authfetch = () => Axios.get('/init')
const langfetch = (lang) => Axios.get(`/data/lang/${lang}.json`)
const loginfetch = (email,password,remember,guard ="") => Axios.post(guard+'/login',{email,password,remember})
const registerfetch = (name,email,password,password_confirmation,guard="") => Axios.post(guard+'/register',{name,email,password,password_confirmation})
const salonlarfetch = (page=1) => Axios.get('/api/salon',{params:{page:page}})
const vipsfetch =()=> Axios.get('/api/vips')
const salonIdfetch = (id) => Axios.get('/api/salon/profile/'+id)
const userIdfetch = (id) => Axios.get('/api/user/profile/'+id)
const searchfetch = (path,soz)=>Axios.get('/api/search'+path,{params:{soz}})
const resetfetch = (email,password,password_confirmation,token,guard = '') => Axios.post(guard+'/password/reset',{email,password,password_confirmation,token})
const forgotfetch = (email,guard = '') => Axios.post(guard + '/password/email',{email})
const rezervDatafetch = (id) => Axios.get('/api/user/rezerv_data/'+id);
const logoutfetch = ()=>Axios.post('/client/logout')
const profilefetch = (guard,params) => Axios.get('/api/'+guard+'/profile', { params: params })

export {authfetch,langfetch,loginfetch,registerfetch,
    salonlarfetch,vipsfetch,
    salonIdfetch,userIdfetch,searchfetch,resetfetch,
    forgotfetch,rezervDatafetch,
    logoutfetch,profilefetch }