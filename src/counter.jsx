import React, { useEffect, useState } from "react";

const Counter=()=>{
    const[number,setNumber]=useState(0);
    const[text,setText]=useState('Hello');
    //useEffect(callback fun,dependency list)
    useEffect(()=>{
        console.log('call from global console');
        setText(Math.random());//if we write the text instead of math.random then no infinte happens 
    },[number]);//Here in dependancy array we need to choose the opposite variable to call back fun if we choose the same variable there will infinite loop happens.
    
    return (<div>
        <div>{number}</div>
        <div> NEW App</div>
        <div>{text}</div>
        <button onClick={()=>setNumber(Math.random())}>Update Number</button>
        <button onClick={()=>setText(Math.random())}>Update Text</button>
    </div>);
}

export default Counter;