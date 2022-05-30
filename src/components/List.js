import Item from "./Item";

function List() {
    
    return (
        <>
            <h1>Minha lista:</h1>
            <ul>
                <Item marca="Adidas"/>
                <Item marca="Nike"/>
                <Item marca="Zoomp"/>
            </ul>
        </>
    )
}

export default List;