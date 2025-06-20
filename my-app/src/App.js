import './App.css';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';
import Addtodo from './Mycomponents/Addtodo';
import About from './Mycomponents/About';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const onDelete=(todo)=> {   // react hook
    setTodos(todos.filter((e)=>{  //.filter(): Creates a new array excluding the item that matches todo.
      return e!== todo;  //e !== todo: Keeps all items that do not equal the one you passed in.
    }))
  } 

  const addtodo=(title, desc) =>{
    let s_no; 
    if (todos.length===0) {
      s_no=0;
    } else {
      s_no = todos[todos.length-1].sno+1; // .sno Gets its serial number
    }
    const myTodo ={
      sno:s_no,
      title: title,
      desc:desc,
    }
    setTodos([...todos, myTodo]) //It updates the todos state by creating a new array that includes all previous todos plus the new myTodo item at the end.
  }

  const [todos, setTodos] = useState([]); // react hook
    
  return (
    <>
    <Router>
      <Header title='MyToDoList'/>
      <Routes>
          <Route path="/" element={
            <>
              <Addtodo addtodo={addtodo} />
              <Todos Todos={todos} onDelete={onDelete} />
            </>
          } />
          <Route path="/about" element={<About />} />
      </Routes>
      <Footer/> 
    </Router>
    </>

  );
}

export default App;
