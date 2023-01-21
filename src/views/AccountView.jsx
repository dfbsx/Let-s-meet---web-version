import './AccountView.css'
import './StartPage.css'
import { useNavigate } from "react-router-dom";
import Conversation from '../components/Conversation';
import Message from '../components/Message';
import { RiSendPlaneLine } from 'react-icons/ri';
import { CgClose, CgPen } from 'react-icons/cg';
import { draw } from '../crud/draw';
import MessageField from '../components/MessageField';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createConnection, getRooms } from '../store/actions';


function AccountView({setCurView}) {
  const userName = useSelector(state=>state?.userName)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(createConnection())
  },[])
  const rooms = useSelector(state=>state?.roomList)
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
            <span className="userName">Cześć, <strong>{userName}</strong>!</span>
            <span className="userDescription">Lubię dobrą książkę, dobry film i sporty ekstermalne takie jak szachy</span>
            <button className="drawbtn" onClick={handleDraw}>Losuj!</button>
          </div>
          </div>
        <div className="userMessages">Twoje wiadomości:
          {rooms.map(room=><Conversation room ={room}/>)}
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