import React from 'react'
import './Message.css'
import { useSelector } from "react-redux";

function Message({message}) {
  const user = useSelector(state=>state?.currentUser)
  return (
    <div className="messageRow" style={message?.from===user?{justifyContent:  "flex-start", backgroundColor: "#fff", color:"#535353"} : {justifyContent:"flex-end"}} >
      <div className="singleMessage" >{message?.content}</div>
    </div>
  )
}

export default Message