function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {

        return `Olá ${algumNome}, tudo bem com você?`;

    }

    return (
        <>
            {nome ? (<p>{gerarSaudacao(nome)}</p>) : (<p>Aguardando nome ser digitado na caixinha acima</p>)}
        </>
    )

}

export default Saudacao;