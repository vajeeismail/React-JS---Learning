import React, {useState} from "react";

function Counter () {
    const [count, setCount] = useState(0);

    const countIncrement = () => {
        setCount(count + 1);
    }

    const countDecrement = () => {
        setCount(count - 1);
    }

    const countReset = () => {
        setCount(0);
    }

    return (

        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button onClick={countDecrement}>Decrement</button>
            <button onClick={countReset}>Reset</button>
            <button onClick={countIncrement}>Increment</button>
        </div>
    );
}

export default Counter