import React from 'react';

export default function Addtodo() {
  return(
    <div className='container my-3'>
        <h3 className='text-center'>Add a ToDo</h3>
        <form className='text-center' >
            <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">To Do</label>
               <input
                 type="email"
                 className="form-control"
                 id="exampleInputEmail1"
                 aria-describedby="emailHelp"
               />
            </div>

             <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                />
            </div>

             <button type="submit" className="btn btn-primary btn-sm">Submit</button>
         </form>
    </div>
  )
}
