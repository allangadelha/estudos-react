function OtherList({ items }) {

    return (
        <>
            <h3>Minha lista: </h3>
            { 
                items.length > 0 ? (
                    items.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                ) :
                (
                    <p>Não há itens na lista.</p>
                )
            }
        </>
    )

}

export default OtherList;