import './App.css';
import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkChek, BsBookmarkChekFill } from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviou")

  }

  return (
    <div className="App">
      <div className="todo-header">
        <h1>React Todo</h1>
      </div>
      <div className="form-todo">
        <h2>Insira sua proxima tarefa</h2>
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Enviar"></input>
        </form>
      </div>
      <div className="list-todo">
        <h2>Lista de tarefas</h2>
        {todos.length === 0 && 'Não ha tarefas'}
      </div>
    </div>
  );
}

export default App;
