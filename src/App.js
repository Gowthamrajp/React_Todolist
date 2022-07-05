import React,{useState} from "react";
import Form from "./components/Form";
import  "./App.css"
import TodoList from "./components/TodoList";

export default function App() {

  const[inputText,setInputText]=React.useState("");
  const[todos,setTodos]=useState([]);

  return (
    <div className="App">
      <h1>Hello react</h1>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
      />
      <TodoList 
      todos={todos}
      />
    </div>
    
  );
}

 
