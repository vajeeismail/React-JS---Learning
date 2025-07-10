
function List() {
    const fruits = [{id: 1, name:"apple", calories: 105},
                    {id: 2, name:"orange", calories: 90},
                    {id: 3, name:"banana", calories: 110},
                    {id: 4, name:"watermelon", calories: 150}];


    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
    
    // fruits.sort((a, b) => a.calories - b.calories); // Numberical Order
    // fruits.sort((a, b) => b.calories - a.calories); // Reverse Numberical Order

    const listItem = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;<b>{fruit.calories}</b> 
                                        </li>);
    
    const lowCalFruits = fruits.filter(fruit => fruit.calories > 100);

    const listItem2 = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                            {lowCalFruit.name}: &nbsp;<b>{lowCalFruit.calories}</b> 
                                        </li>);

    return (
        <>
            <h3>All Fruits</h3>
            <ol>{listItem}</ol>

            <h3>More Calorie Fruits (Greater 100)</h3>
            <ul>{listItem2}</ul>
        </>
    );
}

export default List