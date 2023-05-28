import React from 'react'
import './Message.css'
import { useSelector } from "react-redux";

function Message({message}) {
  const user = useSelector(state=>state?.currentUser)
  return (
    <div className="messageRow" style={message?.from===user?{justifyContent:"flex-start"} : {justifyContent:"flex-end"}} >
      <div className="singleMessage" style={message?.from===user?{backgroundColor: "#fff", color:"#535353"} : null} >{message?.content}</div>
    </div>
  )
}

export default Message