import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Chatpage = () => {
    const API_URL = "http://localhost:5000";

    const [chats, setChats] = useState([]);

    const fetchChats = async() => {
        const {data} = await axios.get(API_URL + '/api/chat'); 
        setChats(data)  
        console.log(data)   
    }
    useEffect(()=>{
        fetchChats();
    },[])
  return (
    <div>
        {chats.map(chat =>{
        <div key= {chat._id}>{chat.chatName}</div>
        console.log(chat.chatName)
    })}
    </div>
  )
}

export default Chatpage