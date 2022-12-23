import React from 'react'
import './Message.css'

function Message({text}) {
  return (
    <div className="singleMessage">{text}</div>
  )
}

export default Message