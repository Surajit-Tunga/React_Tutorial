import React from 'react';
import Todo  from './Todo';

export default function Todos(props) {
  return (
    <div className='container'>
      <h3 className='text-center my-4'>Todos List</h3>
      {props.Todos.length===0? "No ToDos to Display":  // If there are no todos, it shows "No ToDos to Display".Otherwise, it maps over props.Todos and renders a <Todo /> component for each.
        props.Todos.map( (todo)=> {
        return   <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>  
      })}
    </div>
  );
}