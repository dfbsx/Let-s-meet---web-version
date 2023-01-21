import React from 'react'
import { useDispatch } from 'react-redux'
import { join } from '../store/actions'
import './Conversation.css'

function Conversation({room}) {
  const dispatch = useDispatch()
  return (
    <div className="item"
      onClick={()=>{
        dispatch(join(room.roomId))
      }}
    >
        <div className="conversation">
            <div className="userNick">{room.roomName?room.roomName : "Pokój usunięty" }</div>
            <div className="messageText">Test</div>
        </div>
    </div>
  )
}

export default Conversation