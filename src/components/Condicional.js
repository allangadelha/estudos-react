import { useState } from 'react';

function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    async function sendEmail(e) {
        e.preventDefault();
        await setUserEmail(email);
        console.log("Enviando e-mail " + userEmail + "!!!")
    }

    function clearEmail(e) {
        e.preventDefault();
        setUserEmail("");
    }
    
    return (
        <>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Digite o seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={sendEmail}>Enviar e-mail</button>
                {userEmail && (
                    <div>
                        <p>E-mail do usuário: {userEmail}</p>
                        <button onClick={clearEmail}>Limpando e-mail</button>
                    </div>
                )}
            </form>
        </>
    )

}

export default Condicional;