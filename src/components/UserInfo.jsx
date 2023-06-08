import "./userInfo.css";


function UserInfo({ open, setOpen,otherUserData}) {
    if (!open) return null;
  return (
    <div onClick={()=>setOpen(false)} className='overlay'>
    <div className='modalContainer'
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div>
        <div className="info">
            <strong style={{fontSize:"x-large"}}>{otherUserData.userName}</strong>
            <p>Bio: {otherUserData?.bio}</p>
            <p>Miasto: {otherUserData?.city}</p>
            <p>Uczelnia: {otherUserData?.university}</p>
            <p>Kierunek: {otherUserData?.major}</p>
            <p>Płeć: M</p>
        </div>
      </div>
    </div>
  </div>

  )
}

export default UserInfo