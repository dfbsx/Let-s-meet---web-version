import './StartPage.css'
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import { register } from '../crud/register';
import Login from '../components/Login';

function StartPage({setCurView}) {

    const navigate = useNavigate();
    const [openModal,setOpenModal]=useState(false)
    const [registerData,setRegister]=useState({
        email:"",
        nick:"",
        password:"",
        reapetedPassword:"",
        bio:"",
        city:"",
        university:"",
        major:""
    })
      const handleRegister = () => {
        register(registerData)
        .then(()=>{
            console.log("jej")
        })
        .catch((error)=>{
            console.log("dupa",error.response.data.title)
        })
      }

    return (
        <div className='App'>
            <Login 
                    open={openModal} 
                    onClose={() => setOpenModal(false)}
                />
            <div className="webHeader">
                <span style={{fontFamily:"Courier"}}>Let's meet!</span>
                <button className="logbtn" onClick={() => setOpenModal(true)}>Zaloguj</button>
            </div>
            <div className="webBody">
                <div className="siteDescription">
                        <span>Jesteś studentem?<br/>
                        Szukasz kogoś do pomocy?<br/>
                        A może pragniesz poznać kogoś z podobnymi zainteresowaniami?<br/>
                        Jeśli tak, to trafiłeś idealnie!<br/><br/>
                        Witaj na <strong>Let's meet</strong>!
                        </span>
                </div>
                <div className="registerPart">
                    <form className="register" onSubmit={(event)=>event.preventDefault()}>
                        <h1>Zarejestruj się!</h1>
                        <input className='registerInput'
                            placeholder="Email"
                            type="email"
                            value={registerData.email}
                            onChange={(e)=>setRegister({...registerData, email:e.target.value})}
                        />
                        <input className='registerInput'
                            placeholder="Nick"
                            value={registerData.nick}
                            onChange={(e)=>setRegister({...registerData, nick:e.target.value})}
                        />
                        <input className='registerInput'
                            placeholder="Hasło"
                            type="password"
                            value={registerData.password}
                            onChange={(e)=>setRegister({...registerData, password:e.target.value})}
                        />
                        <input className='registerInput'
                            placeholder="Powtórz hasło"
                            type="password"
                            value={registerData.reapetedPassword}
                            onChange={(e)=>setRegister({...registerData, reapetedPassword:e.target.value})}
                        />
                        <input className='registerInput'
                            placeholder="O mnie"
                            value={registerData.bio}
                            onChange={(e)=>setRegister({...registerData, bio:e.target.value})}
                        />
                        <input className='registerInput'
                            placeholder="Miasto"
                            value={registerData.city}
                            onChange={(e)=>setRegister({...registerData, city:e.target.value})}
                        />
                        <input className='registerInput'
                            placeholder="Uczelnia"
                            value={registerData.university}
                            onChange={(e)=>setRegister({...registerData, university:e.target.value})}
                        />
                        <input className='registerInput'
                            placeholder="Kierunek"
                            value={registerData.major}
                            onChange={(e)=>setRegister({...registerData, major:e.target.value})}
                        />
                        <button className="registerButton" onClick={handleRegister}>Dołącz!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StartPage