import React from "react";
import Message from "./Message";
import "./MessageField.css";
import { RiSendPlaneLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

function MessageField() {
  return (
    <div className="messagePanel" id="messpan">
      <div className="otherUserDescription">
        Wiesiaa
        <button className="close">
          <CgClose style={{ fontSize: "25", color: "#535353" }} />
        </button>
      </div>
      <div className="conversation">
        <Message text="Cześć!" />
        <Message text="Hejka naklejka" />
        <Message text="Cześć!" />
        <Message text="Hejka naklejka" />
        <Message text="Cześć!" />
        <Message text="Hejka naklejka" />
        <Message text="Cześć!" />
        <Message text="Hejka naklejka" />
        <Message text="Cześć!" />
        <Message text="Hejka naklejka" />
        <Message text="Cześć!" />
        <Message text="Hejka naklejka" />
        <Message text="Cześć!" />
        <Message text="Hejka naklejka" />
        <Message text="Cześć!" />
        <Message text="Hejka naklejka" />
      </div>
      <div className="newMessageField">
        <textarea className="newMessageInput" />
        <div className="send">
          <RiSendPlaneLine style={{ color: "#0096FF", fontSize: "25" }} />
        </div>
      </div>
    </div>
  );
}

export default MessageField;
