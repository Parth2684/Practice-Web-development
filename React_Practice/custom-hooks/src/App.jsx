
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function useTodos (n) {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const value = setInterval((n) => {
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos)
        setLoading(false)
      })
    }, n*1000)
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
       setTodos(res.data.todos)
       setLoading(false)
    })
    return () => {
      clearInterval(value)
    }
  }, [n])
  return {todos, loading}
}


function App() {
 
  const todos = useTodos(5);
  // const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //     .then(res => setTodos(res.data.todos))
  // }, [])
  if(loading){
    return <div>loading...</div>
  }
  return (
    <>
      {todos.map(todos => <Track todo={todo} />)}
    </>
  )
}

function Track ({todo}) {
  return <div>
    {todo.title}
    <br>
    </br>
    {todo.description}
  </div>
}
export default App
