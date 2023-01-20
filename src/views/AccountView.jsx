import './AccountView.css'
import './StartPage.css'
import { useNavigate } from "react-router-dom";
import Conversation from '../components/Conversation';
import Message from '../components/Message';
import { RiSendPlaneLine } from 'react-icons/ri';
import { CgClose, CgPen } from 'react-icons/cg';
import { draw } from '../crud/draw';
import MessageField from '../components/MessageField';


function AccountView({setCurView}) {
  const navigate = useNavigate();

  const logout = () => {
      setCurView("StartPage");
      navigate(`/`);
    };

    const edit = () => {
      setCurView("EditProfile");
      navigate(`/editProfile`);
    };

    const handleDraw = () => {
      draw()
      .then((resp)=>{
          console.log("to dostaliśmy", resp.data)
      })
      .catch(err=>{

      })
    }

  
  return (
    <div className="AccountView">
      <div className="webHeader">
                Let's meet!
                <button className="logoutbtn" onClick={logout}>Wyloguj</button>
      </div>
      <div className="siteBody">
      <div className="userPanel">
        <div className="userProfile">
          <div className="editProfile">
            <CgPen onClick={edit} style={{alignSelf:'flex-start',justifyContent:'flex-end'}}/>
          </div>
          <div className="userPart">
            <span className="userName">Cześć, <strong>Jacek</strong>!</span>
            <span className="userDescription">Lubię dobrą książkę, dobry film i sporty ekstermalne takie jak szachy</span>
            <button className="drawbtn" onClick={handleDraw}>Losuj!</button>
          </div>
          </div>
        <div className="userMessages">Twoje wiadomości:
          <Conversation 
            nick="Asia"
            messageText="Cześć! Co tam?"
            time="13:50"/>
            <Conversation 
            nick="Asia"
            messageText="Cześć! Co tam?"
            time="13:50"/>
            <Conversation 
            nick="Asia"
            messageText="Cześć! Co tam?"
            time="13:50"/>
            <Conversation 
            nick="Asia"
            messageText="Cześć! Co tam?"
            time="13:50"/>
            <Conversation 
            nick="Asia"
            messageText="Cześć! Co tam?"
            time="13:50"/>
            <Conversation 
            nick="Asia"
            messageText="Cześć! Co tam?"
            time="13:50"/>
            <Conversation 
            nick="Asia"
            messageText="Cześć! Co tam?"
            time="13:50"/>
        </div>
        <div className="logout">
          <button className="logbtn" onClick={logout}>Wyloguj</button>
        </div>
      </div>
        <MessageField/>
      </div>
    </div>
  )
}

export default AccountView