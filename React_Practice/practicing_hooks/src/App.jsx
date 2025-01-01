import { useEffect, useState } from 'react'
import axios from 'axios'
import { response } from 'express';

function App() {
  const [todos, setTodos] = useState([]);

    useEffect(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
        .then((response)=>{
          setTodos(response.data.todos)
        })
    }, [])
  

  return (
    <div>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} key={todo.id}></Todo>)}
    </div>
  )
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App
