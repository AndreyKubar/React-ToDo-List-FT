import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import './App.css';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([])

  useEffect(() => {
    getLocalTodo()
  }, [])

  useEffect(() =>  {

  //фильтрация задач
    const filterHandler = () => {
      switch(status) {
        case 'completed':
          setFilterTodos(todos.filter(todo =>  todo.completed === true))
          break;
        case 'uncompleted':
          setFilterTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilterTodos(todos);
          break;
      }
    }
    filterHandler();
    localTodos(); 
  }, [todos, status]);

  const localTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }
  const getLocalTodo = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

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
        filterTodos={filterTodos} 
        setTodos={setTodos}
        todos={todos} 
      />

    </div>

  );
}

export default App;
