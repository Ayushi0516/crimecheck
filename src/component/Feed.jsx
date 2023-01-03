import React from 'react'
import { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../Context';
 const Feed = () => {
    const [msg,setmsg]=useState('')
    const [data,setdata]=useState([])
    const { username } =useContext(AppContext);
    console.log(username)
    const handleSubmit=async()=>{

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json" 
           }
        let bodyContent = JSON.stringify({
        "msg":msg,
        });
        let reqOptions = {
            url: "https://crime-snowy.vercel.app/post/feed",
            method: "POST",
            headers: headersList,
            data: bodyContent,
          }
          
          let response = await axios.request(reqOptions);
          console.log(response.data);
        }
        useEffect(async()=>{
            let headersList = {
              "Accept": "*/*",
              "User-Agent": "Thunder Client (https://www.thunderclient.com)" 
             }
             
             let reqOptions = {
               url: "https://crime-snowy.vercel.app/post/data",
               method: "GET",
               headers: headersList,
             }
             
             let response = await axios.request(reqOptions);
             setdata(response.data)
            
           },[])
        
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <textarea type="text" name="msg" placeholder='Enter Title'  value={msg}     onChange={(e)=>setmsg(e.target.value)}/>
                 <input type="submit" value="post"/>
            </form>
            </div>
            <div>
                {data?.map((el)=>(
                    <div>
                         <div>{el.msg}</div>
                         <div> {el.createdAt.split("T").join(" ")}</div>
                    </div>
                   

                ))}
            </div>

    </div>
  )
}
export default Feed