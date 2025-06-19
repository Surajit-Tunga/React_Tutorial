import React from 'react';
import { useState } from "react";

export default function Addtodo(props) {
  const[title, setTitle] = useState("");
  const[desc, setDesc] = useState("");

  const submit = (e)=> {
    e.preventDefault(); // prevent page reload
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
      return; } else {
         props.addtodo(title, desc);
         setTitle("");
         setDesc("");
      }
   
  }
  return(
    <div className='container my-3'>
        <h3 className='text-center'>Add a ToDo</h3>
        <form onSubmit={submit}className='text-center' >
            <div className="mb-3">
               <label htmlFor="title" className="form-label">To Do</label>
               <input
                 type="text"
                 value={title}
                 onChange={(e)=>setTitle(e.target.value)}
                 className="form-control"
                 id="title"
                 aria-describedby="emailHelp"
               />
            </div>

             <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input
                type="text"
                value={desc}
                onChange={(e)=>setDesc(e.target.value)}
                className="form-control"
                id="desc"
                />
            </div>

             <button type="submit" className="btn btn-primary btn-sm">Add ToDo</button>
         </form>
    </div>
  )
}
