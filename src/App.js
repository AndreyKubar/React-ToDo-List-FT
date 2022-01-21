import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([])
  return (
    <div className="App">
      <header>
        <h1>TODO LIST</h1>
      </header>
      <span className='App'>
        <h2>Осталось задач:  {todos.length}</h2>
      </span>
      <Form 
        inputText={inputText}
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus} 
      />
      <TodoList
        setTodos={setTodos}
        todos={todos} 
      />

    </div>

  );
}

export default App;
