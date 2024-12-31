
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  
  return (
          <div>
             <CustomButton count={count} setCount={setCount}></CustomButton>
             <CustomButton count={count * 2} setCount={setCount}></CustomButton>
             <CustomButton count={count * 3} setCount={setCount}></CustomButton>
             <CustomButton count={count * 4} setCount={setCount}></CustomButton>
             <CustomButton count={count * 5} setCount={setCount}></CustomButton>
             <CustomButton count={count * 6} setCount={setCount}></CustomButton>
             <CustomButton count={count * 7} setCount={setCount}></CustomButton>
             <CustomButton count={count * 8} setCount={setCount}></CustomButton>
             <CustomButton count={count * 9} setCount={setCount}></CustomButton>
             <CustomButton count={count * 10} setCount={setCount}></CustomButton>
          </div>
  )
}

function CustomButton(props) {
  
  function onClickHandler() {
    props.setCount(props.count + 1)
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>
}

export default App
