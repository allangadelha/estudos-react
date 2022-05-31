
import Button from "./eventos/Button";

function Evento() {

    function myEvent() {
        console.log("Ativando primeiro evento");
    }
    
    function myTwoEvent() {
        console.log("Ativando segundo evento");
    }

    return (
        <div>
            <p>Clique para disparar evento: </p>
            <Button event={myEvent} text="Primeiro evento"/>
            <Button event={myTwoEvent} text="Segundo evento"/>
        </div>
    )

}

export default Evento;