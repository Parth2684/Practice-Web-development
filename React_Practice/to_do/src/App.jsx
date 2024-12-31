import { useState } from "react";
let counter = 4;
function App() {
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Gym",
      description: "Go to gym",
    },
    {
      id: 2,
      title: "Food",
      description: "Go to eat",
    },
    {
      id: 3,
      title: "Sleep",
      description: "Go to sleep",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: "Class",
        description: "Go study",
      },
    ]);
  }

  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}

export default App;
