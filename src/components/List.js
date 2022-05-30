import Item from "./Item";

function List() {
    
    return (
        <>
            <h1>Minha lista:</h1>
            <ul>
                <Item marca="Adidas" ano_lancamento={1950}/>
                <Item marca="Nike" ano_lancamento={1960}/>
                <Item marca="Zoomp" ano_lancamento={1980}/>
                <Item />
            </ul>
        </>
    )
}

export default List;