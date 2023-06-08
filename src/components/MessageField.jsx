import React from "react";
import Message from "./Message";
import "./MessageField.css";
import { RiSendPlaneLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { sendMessage } from "../store/actions";
import UserInfo from "./UserInfo";
import { getUserDataFromNick } from "../crud/getUserDataFromNick";

function MessageField() {
  const [otherUserData,setOtherUserData] = useState({})
  const user = useSelector((state) => state?.currentUser);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((state) => state?.messages);
  const [openModal,setOpenModal]=useState(false)
  const messagesEndRef = useRef(null)
 
  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" })
  }
  
  useEffect(()=>{
    if(user){
      getUserDataFromNick(user)
      .then((resp)=>{
          console.log("dane obcego", resp.data)
          setOtherUserData(resp.data)
      })
      .catch(err=>{
        console.log("Nie działają dane obcego bo:", err)
        alert(err.response.data.title?err.response.data.title:"Wystąpił nieznany błąd")
      })
    }
  },[user])

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  const onEnterPress = (e) => {
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      if (message) {
        dispatch(sendMessage(message)).then(() => setMessage(""));
      }
    }
  }

  //console.log("wiadomości", messages)
  return (
    <div className="messagePanel" id="messpan">
      <UserInfo
                    open={openModal}  
                    setOpen={setOpenModal}
                    otherUserData={otherUserData}
                />
      <div className="convHeader">
        <div onClick={() => setOpenModal(true)}>{user ? user : "Wylosuj pokój"}</div>
       
      </div>
      <div className="conversation" >
        { messages.length==0?<p style={{fontStyle:"italic"}}>Rozpocznij konwersację</p>:messages.map((message) => (<Message message={message} />))}
        <div ref={messagesEndRef} />
      </div>
      <div className="newMessageField">
        <textarea
          className="newMessageInput"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={onEnterPress}

        />
        <div
          className="send"
          onClick={() => {
            if (message) {
              dispatch(sendMessage(message)).then(() => setMessage(""));
            }
          }}
        >
          <RiSendPlaneLine style={{ color: "#0096FF", fontSize: "25" }} />
        </div>
      </div>
    </div>
  );
}

export default MessageField;
