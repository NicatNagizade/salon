import React,{useState,useEffect,useRef} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

export default function Index () {
    const ref_name = useRef('')
    const ref_email = useRef('')
    const ref_password = useRef('')
    const ref_password_confirmation = useRef('')
    const handleClick =()=>{
        const name = ref_name.current.value
        const email = ref_email.current.value
        const password = ref_password.current.value
        const password_confirmation = ref_password_confirmation.current.value
        Axios.post('/admin/login',{name,email,password,password_confirmation})
        .then(res=>{
            console.log(res.data)
        })
    }

    return (
        <div>
            <input type="text" ref={ref_name} /><br />
            <input type="text" ref={ref_email} /><br />
            <input type="text" ref={ref_password} /><br />
            <input type="text" ref={ref_password_confirmation} /><br />
            <button onClick={handleClick}>OK</button>
        </div>
    );
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}