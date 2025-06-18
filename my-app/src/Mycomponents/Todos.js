import React from 'react';
import Todo  from './Todo';

export default function Todos(props) {
  return (
    <div className='container'>
      <h3 className='text-center my-4'>Todos List</h3>
      <Todo todo={props.Todos[0]}/>
    </div>
  );
}
// 1.3.45