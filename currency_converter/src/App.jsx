import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' 
      style={{backgroundImage:`url(https://images.pexels.com/photos/34579083/pexels-photo-34579083.jpeg?_gl=1*1mqw60f*_ga*MTk2ODQxNzg2Mi4xNzcxMjExMDky*_ga_8JE65Q40S6*czE3NzEyMTEwOTIkbzEkZzEkdDE3NzEyMTExNTMkajU5JGwwJGgw)`}}
      ></div>
    </>
  )
}

export default App
