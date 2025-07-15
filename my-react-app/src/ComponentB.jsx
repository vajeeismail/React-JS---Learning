import React, {useContext} from "react";
import { UserContext } from "./ComponentA";
import ComponentC from "./ComponentC";

function ComponentB () {

    const user = useContext(UserContext);
    
    return (
        <>
           <div className="box">
                <h1>Component B</h1>
                <h3>{`Hello again ${user}`}</h3>
                <ComponentC />
           </div>
        </>
    ); 
}

export default ComponentB