import { useEffect } from "react"
import { useState } from "react"
import "./App.css"



function App() {
  const [color , setColor] = useState("red")
  function toRed(){
    setColor("red")
  } 
  function toGreen(){
    setColor("green")
  }
  useEffect(()=>{
    document.body.style.backgroundColor=color
  },[color])
  return (
    <>
     
      <button className="red buttons" onClick={toRed}>Red</button>
      <button className="green buttons" onClick={toGreen}>Green</button>
    
      
    </>
  )
}

export default App
