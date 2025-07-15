import React, {useState, useEffect} from "react";

// useEffect(function, [dependencies]);
    // 1. useEffect (() => {})  // Runs after every re-render
    // 2. useEffect (() => {}, [])  // Runs only on mount
    // 3. useEffect (() => {}, [value])  // Runs on mount + when value changes


function MyComponent () {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // 1. useEffect (() => {})  // Runs after every re-render
    useEffect(() => {
        document.title = `Count: ${count}`
    }); // See the title of this document


    // 2. useEffect (() => {}, [])  // Runs only on mount
    useEffect(() => {
        document.title = `My Counter Program`
    }, []); // See the title of this document

    
    // 3. useEffect (() => {}, [value])  // Runs on mount + when value changes
    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count]); // See the title of this document

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count, color]); // See the title of this document


    function addCount() {
        setCount(c => c + 1);
    }

    function subCount () {
        setCount(c => c - 1);   
    }

    function handleColor () {
        setColor(c => c === "green" ? "red" : "green");
    }
    
    return (
        <>
            <p style={{color: color}} >count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Subtract</button> <br />
            <button onClick={handleColor}>Change Color</button>
        </>
    );
}

export default MyComponent