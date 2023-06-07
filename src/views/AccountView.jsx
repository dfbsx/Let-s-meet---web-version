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


function AccountView({setCurView,setisLoggedIn}) {
  const [userBio, setUserBio] = useState()
  const [openModal,setOpenModal]=useState(false)
  const roomList = useSelector(state=>state?.roomList)
  const userName = useSelector(state=>state?.userName)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [userN, setUserN] = useState()
 
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("Lets_meeet"))
    //dispatch(createConnection(user.token))
    getUserData(user?.token)
      .then((resp) => {
        setUserBio(resp.data.bio)
        setUserN(resp.data.userName)
      })
      .catch((err) => {
        alert(err.response.data.title?err.response.data.title:"Wystąpił nieznany błąd")
      });
  },[userBio])
  const rooms = useSelector(state=>state?.roomList)
  const logout = () => {
      navigate(`/`);
      localStorage.removeItem("Lets_meeet")
      setisLoggedIn(false);
    };

    const edit = () => {
      navigate(`/editProfile`);
    };

  

  return (
    <div className="AccountView">
       <SearchUser
                    open={openModal}  
                    setOpen={setOpenModal}
                />
      <div className="webHeader">
                <div className='logoandheader'>
                <div className="logo"></div>
                <span>Let's meet!</span>
                </div>
                <button className="logoutbtn" onClick={logout}>Wyloguj</button>
      </div>
      <div className="siteBody">
      <div className="userPanel">
        <div className="userProfile">
          <div className="editProfile">
            <CgPen onClick={edit} style={{alignSelf:'flex-start',justifyContent:'flex-end'}}/>
          </div>
          <div className="userPart">
            <span className="userName">Cześć, <strong>{userN}</strong>!</span>
            <span className="userDescription">{userBio}</span>
            <button className="drawbtn" onClick={() => setOpenModal(true)} >Losuj!</button>
          </div>
          </div>
        <div className="userMessages">Twoje wiadomości:
          {rooms?.map(room=><Conversation room ={room}/>)}
        </div>
        <div className="logout">
          <button className="logbtn" onClick={logout}>Wyloguj</button>
        </div>
      </div>
      {
        roomList?.length===0?<NoMessages/>:<MessageField/>
      }
        
      </div>
    </div>
  )
}

export default AccountView