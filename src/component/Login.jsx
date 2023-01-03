import React,{useState,useContext} from 'react'
import "./Login.css"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { AppContext } from "../Context";
 const Login = () => {
    const[username,setusername]=useState("")
    const navigate=useNavigate()
  const  {getname}  = useContext(AppContext);

  const handle=async()=>{
    let bodyContent = JSON.stringify({
        "username":username
       });
       console.log(bodyContent)
       axios
       .post("https://crime-snowy.vercel.app/login", bodyContent)
       .then((res) =>getname(res.username));
       navigate('/feed')
  }
  return (
    <div className='box1'>
        <h2>Login With UserName</h2>
        <div className='box2'>
            <input placeholder='Enter Username' type="text" name="username" value={username} onChange={(e)=> setusername(e.target.value)}/>
            <button onClick={handle}>Login</button>

        </div>

    </div>
  )
}
export default Login
