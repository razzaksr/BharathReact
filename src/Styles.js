import { useState } from "react"

const Styles=()=>{
    const used=()=>{
        //alert("Button clicked")
        setWorkStyle({
          width:'1500px',
          height:'1000px'
        })
      }
      const[workStyle,setWorkStyle]=useState({
        width:'1000px',
        height:'500px'
      })
      
        // const workStyle={
        //   width:'1000px',
        //   height:'800px'
        // }
      
        const usedDouble=()=>{
          setWorkStyle({
            width:'1000px',
            height:'500px'
          })
        }
        
        //const[hookName,hookFunction]=useState(initialValue)
        // number, list, json
        
      
        return(
          <>
            <img src="files/review.jpg" alt="Meeting" style={{width:'900px',height:'700px',borderRadius:'50px'}} />
      
            <img src="files/workspace.jpg" alt="Workspace" style={workStyle}/>
      
            <button className="btn btn-outline-warning" onClick={used} onDoubleClick={usedDouble}>
              Change
            </button>
      
          </>
        )
}
export default Styles;