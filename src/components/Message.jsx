import React from 'react'
import './Message.css'

function Message({message}) {
  return (
    <div className="messageRow" style={{justifyContent: message?.sendByClient? "flex-start" : "flex-end"}} >
      <div className="singleMessage" >{message?.message}</div>
    </div>
  )
}

export default Message