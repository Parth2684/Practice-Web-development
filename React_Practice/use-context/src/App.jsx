import { useState } from 'react'
import { CountContext } from './context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Count />
      </CountContext.Provider>

    </div>
  )
}

function Count() {
  return <div> 
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer(){
  const { count } = useContext(CountContext );
  return <div>
    {count}
  </div>
}

function Buttons() {
  const { setCount } = useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount((c)=> c + 1)
    }}>Increase Count</button>
    <button onClick={()=>{
      setCount((c)=> c - 1)
    }}>Decrease Count</button>
  </div>
}
export default App
