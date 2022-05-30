function Evento({ numero }) {


    function handleActive() {
        console.log("Você clicou no botão" + numero);
    }

    return (
        <div>
            <p>Clique para desparar evento: </p>
            <button onClick={handleActive}>Ativar!</button>
        </div>
    )

}

export default Evento;