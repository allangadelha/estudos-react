import { useState } from 'react';
function Form() {


    function handleCreate(e) {
        e.preventDefault();
        console.log(`Cadastrado com sucesso!!!\nNome: ${name}\nSenha: ${password}`);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return(
        <div>
            <h1>Formulário de cadastro:</h1>
            <form onSubmit={handleCreate}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Cadastrar" />
                </div>
            </form>
        </div>
    )

}

export default Form;