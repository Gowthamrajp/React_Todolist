import React from 'react'
import TodoList from './TodoList';

function Form(props) {
  function inputTextHandler(e){
    //console.log(e.target.value);
    props.setInputText(e.target.value)
  }  
  function submitTodoHandler(e){
    e.preventDefault();
    props.setTodos([...props.todos,{text:props.inputText,completed:false,id:Math.floor(Math.random()*1000)}]);
    props.setInputText("");
  }
  
  return (
    <form>
      <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button  onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form