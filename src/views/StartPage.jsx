import './StartPage.css'
import { useNavigate } from "react-router-dom";

function StartPage({setCurView}) {

    const navigate = useNavigate();

    const login = () => {
        setCurView("AccountView");
        navigate(`/accountview`);
      };

    return (
        <div className='App'>
            <div className="webHeader">
                <span style={{fontFamily:"Courier"}}>Let's meet!</span>
                <button className="logbtn" onClick={login}>Zaloguj</button>
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
                    <form className="register">
                        <h1>Zarejestruj się!</h1>
                        <input className='registerInput'
                            placeholder="Email"
                        />
                        <input className='registerInput'
                            placeholder="Nick"
                        />
                        <input className='registerInput'
                            placeholder="Hasło"
                        />
                        <input className='registerInput'
                            placeholder="Powtórz hasło"
                        />
                        <input className='registerInput'
                            placeholder="O mnie"
                        />
                        <input className='registerInput'
                            placeholder="Miasto"
                        />
                        <input className='registerInput'
                            placeholder="Szkoła"
                        />
                        <button className="registerButton">Dołącz!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StartPage