function Form() {


    function handleCreate(e) {
        e.preventDefault();
        console.log("Cadastrado com sucesso!!!");
    }

    return(
        <div>
            <h1>Formuláriod e cadastro:</h1>
            <form onSubmit={handleCreate}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )

}

export default Form;