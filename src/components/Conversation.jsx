import React from 'react'
import { useDispatch } from 'react-redux'
import { join, setUser } from '../store/actions'
import './Conversation.css'

function Conversation({room}) {
  const dispatch = useDispatch()
  return (
    <div className="item"
      onClick={()=>{
        dispatch(join(room.roomId))
        dispatch(setUser(room?.roomName))
      }}
    >
        <div className="conversation">
            <div className="userNick">{room.roomName?room.roomName : "Pokój usunięty" }</div>
            <div className="messageText">{room.lastMessage!==null?room.lastMessage: "Brak wiadomości" }</div>
        </div>
    </div>
  )
}

export default Conversation