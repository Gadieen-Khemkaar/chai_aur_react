import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow]=useState(false)
  const [pwd, setPwd] = useState("")

  const pwdGenerator = (()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numAllow) str+="0123456789"
    if(charAllow) str+=",<>!@#$%^&&*()"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
    }
    pass+=str.charAt(char)

    setPwd(pass)
  },[length,numAllow,charAllow,setPwd])

  return (
    <>
    
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray'>
        test
      </div>

    
    </>
  )
}

export default App
