import React, {useState} from "react";

function MyComponent () {
    const [count, setCount] = useState(0);

    const countIncrement = () => {
        // setCount(c + 1);

        // Take the PENDING state to calculate NEXT state
        // React puts your updater functions in a queue (waiting in line)
        // During the next urender, it will call them in the same order

        // Look chang of Code from above setCount(c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const countDecrement = () => {
        // setCount(count - 1);

        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
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

export default MyComponent