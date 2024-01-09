import { GlobalStyle } from "./globalStyles";
import { useState } from "react";
import "./app.css"

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([
    "Work on a project",
    "Learn TypeScript",
  ]);
  const listItems = todos.map((goal, index) => <li key={index} onClick={()=> removeToDo(index)}>{goal}</li>);
 

  function addToDo(e) {
    e.preventDefault();
    setTodos([...todos, todoInput]);
    setTodoInput("");
  }

  function removeToDo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }


  return (
    <>
      <GlobalStyle />
      <h1>To-Do List</h1>
      <form>
        <label htmlFor="todoInput">Goals</label>
        <input value={todoInput} onChange={(e)=> setTodoInput(e.target.value)} id="todoInput"></input>
        <button onClick={addToDo}>Add</button>
      </form>
      <ul className="todoList">{listItems}</ul>
    </>
  );
}

export default App;
