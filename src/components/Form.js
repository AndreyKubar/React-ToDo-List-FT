import React from "react";

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    //ввести название задачи
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText, 
                completed: false,
                id: Math.random() * 1000
            }
        ])
        setInputText("");
    }
    //статус задачи
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return(
        <form>
        <input 
            value={inputText} 
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input" 
        />
        <button 
            onClick={submitTodoHandler} 
            className="todo-button" 
            type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">Все задачи</option>
            <option value="completed">Выполненые</option>
            <option value="uncompleted">Невыполненые</option>
          </select>
        </div>
      </form>
    )
}

export default Form;
