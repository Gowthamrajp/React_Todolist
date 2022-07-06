import React from 'react'
import Todo from "./Todo"
function TodoList({todos,setTodos}) {

  return (
      
    <div className='todo-container'>
        <ul className='todo-list'>
          {todos.map(todo=><Todo 
          text={todo.text} 
          key={todo.id} 
          todo={todo}
          todos={todos}
          setTodo={setTodos}
          completed={todo.completed}
          />)}
        </ul>
    </div>
    
  )
}

export default TodoList