import './App.css';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';
import Addtodo from './Mycomponents/Addtodo';
import { useState } from "react";

function App() {
  const onDelete=(todo)=> {   // react hook
    setTodos(todos.filter((e)=>{  //.filter(): Creates a new array excluding the item that matches todo.
      return e!== todo;  //e !== todo: Keeps all items that do not equal the one you passed in.
    }))
  } 
  const [todos, setTodos] = useState([  // react hook
    {
      sno: 1,
      title: "Go to the market",
      desc: " you need to go market"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: " you need to go market"
    },
    {
      sno: 3,
      title: "Go to the ghat ",
      desc: " you need to go market"
    },    
  ]);
  return (
    <>
      <Header title='MyToDoList'/>
      <Addtodo/>
      <Todos Todos={todos} onDelete={onDelete}/>
      <Footer/> 
    </>

  );
}

export default App;
