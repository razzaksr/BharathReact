import { useState } from "react"

export const Forms=()=>{

    const[entrant,setEntrant]=useState("")

    const onText=(alpha)=>{
        setEntrant(alpha.target.value)
        //console.log(entrant)
    }

    const onButton=()=>{
        alert(entrant)
    }

    return(
        <>
            <input type="text" value={entrant} onChange={onText} name="entrant" placeholder="Enter the name"/>
            <button className="btn btn-outline-primary" onClick={onButton}>
                Greet
            </button>
        </>
    )
}