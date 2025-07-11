import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Guest"); // Default Value Guest
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployed] = useState(false);

    const updateName = () => {
        setName("Vajee");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggledEmployedStatus = () => {
        setEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Name: {age}</p>
            <button onClick={incrementAge}>Increment Age: </button>

            <p>Name: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggledEmployedStatus}>Toggle Status: </button>
        </div>
    );
}

export default MyComponent