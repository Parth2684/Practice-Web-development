import { useState } from 'react'
import { Assignment1 } from './components/Assignment1'
import { Assignment2 } from './components/Assignment2'
import { Assignment3 } from './components/Assignment3'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
// to run any assignment just uncomment any assignment component and run by "npm run dev" in terminal
  return (
    <>
      {/* <Assignment1 /> */}
      {/* <Assignment2 /> */}
      {/* <Assignment3 /> */}
    </>
  )
}

export default App
