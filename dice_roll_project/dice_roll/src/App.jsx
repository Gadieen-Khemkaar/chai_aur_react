import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [dice, setDice] = useState(0)
  function rollDice(){
    let new_dice=Math.floor(Math.random() * 6) + 1
    setDice(new_dice)

  }
  return (  
    <>
      <h1>Dice Roller</h1>
      <p>{dice}</p>
      <button className="roll" onClick={rollDice}>Roll Dice</button>
    </>
  )
}

export default App
