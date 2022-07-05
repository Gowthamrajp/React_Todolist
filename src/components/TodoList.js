import React from 'react'
import Todo from "./Todo"
function TodoList(props) {

  return (
      
    <div className='todo-container'>
        <ul className='todo-list'>
          {props.todos.map(todo=><Todo todo={todo.text} key={todo.id} completed={todo.completed}/>)}
        </ul>
    </div>
    
  )
}

export default TodoList