import React,{useState,useEffect} from "react";
import Form from "./components/Form";
import  "./App.css"
import TodoList from "./components/TodoList";

export default function App() {

  const[inputText,setInputText]=React.useState("");
  const[todos,setTodos]=useState([]);
  const[status,setStatus]=useState('all');
  const[filteredTodos,setFilteredTodos]=useState([]);

  useEffect(()=>{
    filterHandler();
  },[todos,status]);

  const filterHandler = ()=>{
    switch(status){
      case'completed' : setFilteredTodos(todos.filter(todo =>todo.completed===true));
        break;
      case'uncompleted': setFilteredTodos(todos.filter(todo =>todo.completed===false));
        break;
      default: setFilteredTodos(todos);
    }
  }
  return (
    <div className="App">
      <h1>Hello react</h1>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList 
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
    
  );
}

 
