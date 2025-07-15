import React, {useState, useEffect} from "react";

// useEffect(function, [dependencies]);
    // 1. useEffect (() => {})  // Runs after every re-render
    // 2. useEffect (() => {}, [])  // Runs only on mount
    // 3. useEffect (() => {}, [value])  // Runs on mount + when value changes


function MyComponent () {
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    window.addEventListener ("resize", handleResize); 
    console.log("ADDED EVENT LISTENER");
    // Without use effect - 
    // addEventListener work every adjustment - this is not good - so btter is useEffect

    // Resize displa
    useEffect (() => {
        window.addEventListener ("resize", handleResize);
        console.log("ADDED EVENT LISTENER");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("REMOVED EVENT LISTENER");
            // Clean Up - a banefit
        }
    }, [])

    // Resize title dispaly
    useEffect (() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    

    return (
        <>
            <p onChange={handleResize}>Width of Window: {width}</p>
            <p onChange={handleResize}>Height of Window: {height}</p>
        </>
    );
}

export default MyComponent