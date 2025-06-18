import React from 'react';

export default function Todo({todo}) {
  return (
    <div>
       <h4>{todo.title}</h4>
       <p>{todo.desc}</p>
    </div>
  );
}
