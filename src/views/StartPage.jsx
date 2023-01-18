import './StartPage.css'
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import { register } from '../crud/register';
import Login from '../components/Login';
import { useDispatch } from 'react-redux';
import { authenticate } from '../store/actions';
import { useEffect } from 'react';


function StartPage({setCurView}) {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(
       ()=>{
        const token = localStorage.getItem("Lets_meeet")
        console.log(token)
        if(token){
            dispatch(authenticate(token))
            navigate("/accountview")
        }
       }
    );
    
    const [openModal,setOpenModal]=useState(false)
    //const [sucessedRegister,setSucessedRegister]=useState(true)
    const [registerData,setRegister]=useState({
        email:"",
        userName:"",
        password:"",
        reapetedPassword:"",
        bio:"",
        city:"",
        university:"",
        major:""
    })
      const handleRegister = () => {
        register(registerData)
        .then((resp)=>{
            dispatch(authenticate(resp.data.token))
            .then(()=>{
                navigate("/accountview")
              })
        })
        .catch((error)=>{
            console.log("dupa",error.response.data.title)
            //setSucessedRegister(false)
        })
      }

    return (
        <div className='App'>
            <Login 
                    open={openModal}  
                    setOpen={setOpenModal}
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
                            value={registerData.userName}
                            onChange={(e)=>setRegister({...registerData, userName:e.target.value})}
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