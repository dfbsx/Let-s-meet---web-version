import './login.css'
import React, { useState } from 'react'
import { login } from '../crud/login'

const Login = ({ open, onClose }) => {


  const [logData, setLogData] = useState({
    nick: "",
    password: "",
  })


  const handleLogin = () => {
    login(logData.nick, logData.password)
      .then(() => {
        console.log("jej")
      })
      .catch((error) => {
        console.log("dupa", error.response.data.title)
      })
  }
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div className='modalContainer'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>
          <div className='logContainer'>
            <div className='closeBtn' onClick={onClose}>
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