import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  function addValue(){
    counter = counter + 1
    setCounter(counter)
  }

  function removeValue(){
    counter = counter -1
    setCounter(counter)
  }
  return (
    <>
      Chai aur react
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
