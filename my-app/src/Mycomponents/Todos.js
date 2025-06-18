import React from 'react';
import Todo  from './Todo';

export default function Todos(props) {
  return (
    <div className='container'>
      <h3 className='text-center'>Todos List</h3>
      <Todo todo={props.Todos[0]}/>
    </div>
  );
}
