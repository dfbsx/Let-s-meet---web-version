import './StartPage.css'


function StartPage() {
    return (
        <div className='App'>
            <div className="webHeader">
                Miejsce na nazwę i logo
                <button className="logbtn">Zaloguj</button>
            </div>
            <div className="webBody">
                <div className="siteDescription">
                    
                        Jesteś studentem?<br/>
                        Szukasz kogoś do pomocy?<br/>
                        A może pragniesz poznać kogoś z podobnymi zainteresowaniami?<br/>
                        Jeśli tak, to trafiłeś idealnie!<br/><br/>
                        Witaj na <strong>Let's meet</strong>!
                
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
                        <button className="registerButton">Zarejestruj się</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StartPage