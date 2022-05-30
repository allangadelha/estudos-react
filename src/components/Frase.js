import stylesFrases from './Frase.module.css';

function Frase() {

    return (
        <div className={stylesFrases.frasecontainer}>
            <p className={stylesFrases.frasecontent}>Componente criado para testar reutilização de componente</p>
        </div>

    )
}

export default Frase;