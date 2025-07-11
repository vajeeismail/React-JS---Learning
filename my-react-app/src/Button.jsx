function Button() {

    // 01. 
    // const handleClick = () => {
    //     console.log("OUCH!")
    // };

    // return (
    //     <button onClick={handleClick}>Click Me</button>
    // );


    // 02.
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    // return (
    //     {/* <button onClick={() => handleClick2("Vajee")}>Click Me</button> */}

    // );


    // 03.
    // let count = 0;

    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else {
    //         console.log(`${name} stop clicked me! count ${count} is over`);
    //     }
    // }
    

    // return (
    //     <button onClick={() => handleClick("Vajee")}>Click Me</button>
    // );


    //04.
    const handleClick = (e) => e.target.textContent = "Oh No!";

    return (
        <>
            <button onClick={(e) => handleClick(e)}>Click Me</button>
            <button onDoubleClick={(e) => handleClick(e)}>Click Me</button>
        </>
    );

}

export default Button