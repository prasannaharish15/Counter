import { useState } from "react";

function Numcount(){
    const[count,setCount]=useState(0);
    function dec() {
        setCount(count-1);
    }
    function res(){
        setCount(0)

    }
    function inc(){
        setCount(count+1);

    }

    return(
        <div className="counter-container">
            <h1 className="counter-value">{count}</h1>
            <button className="decrement" onClick={dec}>Decrement</button> 
            <button className="reset" onClick={res}>Reset</button>
            <button className="increment" onClick={inc}>Increment</button>
        </div>
    );

}
export default Numcount;