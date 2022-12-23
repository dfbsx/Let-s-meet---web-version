import React from 'react'
import './Conversation.css'

function Conversation({nick,messageText,time}) {
  return (
    <div className="item">
        <div className="conversation">
            <div className="userNick">{nick}</div>
            <div className="messageText">{messageText}</div>
        </div>
        <div className="time">{time}</div>
    </div>
  )
}

export default Conversation