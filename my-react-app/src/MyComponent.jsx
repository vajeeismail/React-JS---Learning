import React, {useState, useEffect, useRef} from "react";

function MyComponent () {

    // 01. 
    // let [number, setNumnber] = useState(0);

    // useEffect(() => {
    //     console.log("COMPONENT RENDERED"); 
    // })

    // 02. 
    // const ref = useRef(0);

    // 03. 
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);

    function handleClick() {
        // 01. 
        // setNumnber(n => n + 1);

        // 02. 
        // ref.current++;
        // console.log(ref.current);

        // 03.
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
    }

    function handleClick1() {
        inputRef1.current.focus();
        inputRef.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "yellow";
    }
     
    return (
        <>
        <div>
            <button onClick={handleClick}>
                Click Me
           </button>
            <br />
           <input ref={inputRef} />
        </div>
        <br />
        <div>
            <button onClick={handleClick1}>
                Click Me
           </button>
            <br />
           <input ref={inputRef1} />
        </div>
        
        </>
    ); 
}

export default MyComponent