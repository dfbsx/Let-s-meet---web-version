import './StartPage.css'
import Btn from '../components/Btn'

function StartPage() {
    return (
        <div>
            <div className="webHeader">
                STRONA
                <Btn
                    text="Zaloguj"
                />
            </div>
            <div className="webBody">
                <div className="siteDescription">
                    <p>
                        Jesteś studentem?<br/>
                        Szukasz kogoś do pomocy?<br/>
                        A może pragniesz poznać kogoś z podobnymi zainteresowaniami?<br/>
                        Jeśli tak, to trafiłeś idealnie!<br/>
                        Witaj na <strong>Let's meet</strong>!
                    </p>
                </div>
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
                    <button className="registerButton">Zarejestruj się</button>
                </form>
            </div>
        </div>
    )
}

export default StartPage