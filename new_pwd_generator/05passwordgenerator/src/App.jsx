import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-white-500"
          placeholder="password"
          readOnly
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
        <div className="flex shadow rounded-lg overflow-hidden mb-4"></div>
      </div>
    </>
  );
}

export default App;
