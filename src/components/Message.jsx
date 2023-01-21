import React from 'react'
import './Message.css'

function Message({message}) {
  return (
    <div className="messageRow" style={{justifyContent: message?.fromUser? "flex-start" : "flex-end"}} >
      <div className="singleMessage" >{message?.content}</div>
    </div>
  )
}

export default Message