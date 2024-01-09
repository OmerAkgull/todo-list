import { GlobalStyle } from "./globalStyles";
import { useState } from "react";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([
    "Proje üzerine çalış",
    "TypeScript öğren",
  ]);
  const listItems = todos.map((goal, index) => <li key={index}>{goal}</li>);
 

  function addToDo() {
    setTodos([...todos, todoInput]);
  }

  return (
    <>
      <GlobalStyle />
      <form>
        <label htmlFor="#todoInput">Hedef</label>
        <input value={todoInput} onChange={(e)=> setTodoInput(e.target.value)} id="todoInput"></input>
        <button onClick={addToDo}>Add</button>
      </form>
      <ul>{listItems}</ul>
    </>
  );
}

export default App;
