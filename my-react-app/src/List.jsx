

function List(props) {

    const itemList = props.items;
    const category = props.category
    
    const listItem = itemList.map(items => <li key={items.id}>
                                            {items.name}: &nbsp;<b>{items.calories}</b> 
                                        </li>);

    return(<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-item">{listItem}</ol>
        </>
    );
}

export default List