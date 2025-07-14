import { element } from "prop-types";
import React, {useState} from "react";

function MyComponent () {
    
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {year: carYear, 
                        make: carMake, 
                        model: carModel};
        
        setCars(c => [...cars, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((element, i) => i !== index));
    }

    function handleYearCahnge (event) {
        setCarYear(event.target.value);
    }

    function handleMakeCahgne (event) {
        setCarMake(event.target.value);
    }

    function handleModelCahnge (event) {
        setCarModel(event.target.value);
    }

    return (
        <div>
            <h2>List Of Car</h2>

            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)} >
                        {car.year} {car.make} {car.model}
                    </li>
                )}
            </ul>

            <input type="number" value={carYear} onChange={handleYearCahnge} /> 
            <br /> <br />
            <input type="text" value={carMake} onChange={handleMakeCahgne} placeholder="Enter car make" />
            <br /><br />
            <input type="text" value={carModel} onChange={handleModelCahnge} placeholder="Enter car model" />
            <br /><br />
            <button onClick={handleAddCar}>Add Car</button>
            <button onClick={handleRemoveCar}>Remove Car</button>
        </div>
    );
}

export default MyComponent