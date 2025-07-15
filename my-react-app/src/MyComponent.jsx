import React, {useState, useEffect, useRef} from "react";

function MyComponent () {

    // 01. 
    // let [number, setNumnber] = useState(0);

    // useEffect(() => {
    //     console.log("COMPONENT RENDERED"); 
    // })

    // 02. 
    const ref = useRef(0);

    function handleClick() {
        // 01. 
        // setNumnber(n => n + 1);

        // 02. 
        ref.current++;
        console.log(ref.current);
    }
     
    return (
        <>
           <button onClick={handleClick}>
                Click Me
           </button>
        </>
    ); 
}

export default MyComponent