import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function addValue(){
    setCount(count + 1)
  }
  function reduceValue(){
    if(count>0){
    setCount(count - 1)
    }
  }
  return (
    <>
    <h1>Counter App</h1>
    <h2>Current Count : {count}</h2>
    <button onClick={addValue}>Add Value</button>
    <button onClick={reduceValue}> Reduce Value</button>
      
    </>
  )
}

export default App
