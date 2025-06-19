import React from 'react';
// import './folder.css' to use external css
export default function Footer() {
  let footerstyle ={  // this how to use css
    position: "relative",
    top: "100vh",
    width: "100%"

  }
  return (
    <footer className='bg-dark text-light py=3' style={footerstyle}>
        <p className="text-center " >Copyright &copy; MyToDoList.com</p>
    </footer>
  );
}
