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
    getLocal();
  },[])
  useEffect(()=>{
    filterHandler();
    saveLocal();
  },[todos,status]);

  const saveLocal=()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const getLocal=()=>{
    if(localStorage.getItem("todos")===null)
    localStorage.setItem("todos",JSON.stringify([]));
    else
     setTodos(JSON.parse(localStorage.getItem("todos")));
    
  }
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
      <h1>React TODO App</h1>
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

 
