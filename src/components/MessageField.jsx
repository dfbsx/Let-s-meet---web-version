import React from "react";
import Message from "./Message";
import "./MessageField.css";
import { RiSendPlaneLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sendMessage } from "../store/actions";

function MessageField() {
  const roomId = useSelector(state=>state?.currentRoom)
  const [message, setMessage]=useState("")
  const dispatch = useDispatch()
  const messages=useSelector(state=>state?.messages)
  console.log("wiadomości", messages)
  return (
    <div className="messagePanel" id="messpan">
      <div className="otherUserDescription">
        {roomId}
        <button className="close">
          <CgClose style={{ fontSize: "25", color: "#535353" }} />
        </button>
      </div>
      <div className="conversation">
        {messages.map(message=><Message message={message}/>)}
      </div>
      <div className="newMessageField">
        <textarea 
          className="newMessageInput" 
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
        <div className="send" 
          onClick={()=>{
            dispatch(sendMessage(message))
          }}
        >
          <RiSendPlaneLine style={{ color: "#0096FF", fontSize: "25" }} />
        </div>
      </div>
    </div>
  );
}

export default MessageField;
