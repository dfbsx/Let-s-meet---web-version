import './AccountView.css'
import './StartPage.css'
import { useNavigate } from "react-router-dom";
import Conversation from '../components/Conversation';
import { CgPen } from 'react-icons/cg';
import { draw } from '../crud/draw';
import MessageField from '../components/MessageField';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createConnection, getRooms } from '../store/actions';
import { getUserData } from '../crud/getUserData';
import { useState } from 'react';
import NoMessages from '../components/NoMessages';
import SearchUser from '../components/SearchUser';


function AccountView({setCurView}) {
  const [userBio, setUserBio] = useState()
  const [draw,setDraw] = useState(false)
  const roomList = useSelector(state=>state?.roomList)
  const userName = useSelector(state=>state?.userName)
  const navigate = useNavigate();
  const dispatch = useDispatch()
 
  useEffect(()=>{
    dispatch(createConnection())
    getUserData()
      .then((resp) => {
        console.log("bio",resp.data)
        setUserBio(resp.data.bio)
      })
      .catch((err) => {
        alert(err.response.data.title?err.response.data.title:"Wystąpił nieznany błąd")
      });
  },[])
  const rooms = useSelector(state=>state?.roomList)
  const logout = () => {
      setCurView("StartPage");
      navigate(`/`);
      localStorage.removeItem("Lets_meeet")
    };

    const edit = () => {
      setCurView("EditProfile");
      navigate(`/editProfile`);
    };

    const handleDraw = () => {
      draw()
      .then((resp)=>{
          console.log("to dostaliśmy", resp.data)
          dispatch(getRooms())
          //dispatch(join()) 
      })
      .catch(err=>{
        console.log("Nie działa bo:", err)
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
            <span className="userDescription">{userBio}</span>
            <button className="drawbtn" >Losuj!</button>
          </div>
          </div>
        <div className="userMessages">Twoje wiadomości:
          {rooms.map(room=><Conversation room ={room}/>)}
        </div>
        <div className="logout">
          <button className="logbtn" onClick={logout}>Wyloguj</button>
        </div>
      </div>
      {
        roomList?.length==0?<NoMessages/>:<MessageField/>
      }
        
      </div>
    </div>
  )
}

export default AccountView