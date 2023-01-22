import React from "react";
import Message from "./Message";
import "./MessageField.css";
import { RiSendPlaneLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
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
  useEffect(()=>{
    getUserDataFromNick(user)
    .then((resp)=>{
        console.log("dane obcego", resp.data)
        setOtherUserData(resp.data)
    })
    .catch(err=>{
      console.log("Nie działają dane obcego bo:", err)
      alert(err.response.data.title?err.response.data.title:"Wystąpił nieznany błąd")
    })
  },[user])

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
        <button className="close">
          <CgClose style={{ fontSize: "25", color: "#535353" }} />
        </button>
      </div>
      <div className="conversation">
        { messages.length==0?<p style={{fontStyle:"italic"}}>Rozpocznij konwersację</p>:messages.map((message) => (<Message message={message} />))}
      </div>
      <div className="newMessageField">
        <textarea
          className="newMessageInput"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
