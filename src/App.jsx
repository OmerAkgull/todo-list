import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";
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

  const Title = styled.h1`
  font-size: 4rem;
    margin: 40px;`

  return (
    <>
      <GlobalStyle />
      <Title>To-Do List</Title>
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
