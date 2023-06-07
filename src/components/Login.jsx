import './login.css'
import React, { useState } from 'react'
import { login } from '../crud/login'
import { useDispatch } from 'react-redux';
import { authenticate } from '../store/actions';
import { useNavigate } from 'react-router-dom';

const Login = ({ open, setOpen, setisLoggedIn}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [logData, setLogData] = useState({
    nick: "",
    password: "",
  })


  const handleLogin = () => {
    console.log(logData)
    login(logData.nick, logData.password)
    .then((resp) => {
      console.log("22")
      setisLoggedIn(true);
      dispatch(authenticate(logData.nick, resp.data.token));
      console.log("24")
      navigate("/accountview");
    })
    .catch((error) => {
      alert("Wprowadzone dane są niepoprawne");
    });
  }
  if (!open) return null;
  return (
    <div onClick={()=>setOpen(false)} className='overlay'>
      <div className='modalContainer'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>
          <div className='logContainer'>
            <div className='closeBtn' onClick={()=>setOpen(false)}>
              X
            </div>
            <div className="formContainer">
              <h1>Logowanie</h1>
              <div className='logForm'>
                <form className='login' onSubmit={(event) => event.preventDefault()}>
                  <input className='loginInput'
                    placeholder="Login"
                    value={logData.nick}
                    onChange={(e) => setLogData({ ...logData, nick: e.target.value })}
                  />
                  <input className='loginInput'
                    placeholder="Hasło"
                    type="password"
                    value={logData.password}
                    onChange={(e) => setLogData({ ...logData, password: e.target.value })}
                  />
                  <button className="loginButton" 
                    onClick={handleLogin}>
                      Zaloguj
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Login;