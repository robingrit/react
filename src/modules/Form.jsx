import {useState} from "react";
export default function Form(){
    let name = "";
    
    const[stateName, setStateName] = useState("")
    function HandleClick(event){
        event.preventDefault();
        alert(`your name is ${name}`)
        setStateName(name);
            
        
        console.log("submitted");

    }
    function handleChange(event){
        name = event.target.value;
       
        console.log(event.target.value);
    }
    return(
        <form >
            <h1>{stateName}</h1>
            <input type="text" placeholder="Name" onChange={handleChange}></input>
            <button onClick={HandleClick}>Submit</button>
        </form>
        
    )
}