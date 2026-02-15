import { useState } from 'react'
import './App.css'


function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function addNumbers() {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  }

  function subtractNumbers() {
    const difference = Number(num1) - Number(num2);
    setResult(difference);
  }

  return (
    <div>
      <h1>Simple Calculator</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />

      <div>
        <button onClick={addNumbers}>+</button>
        <button onClick={subtractNumbers}>-</button>
      </div>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;

