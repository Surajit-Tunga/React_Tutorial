import React from 'react';

export default function Footer() {
  let footerstyle ={  // this how to use css
    position: "absolute",
    top: "94.3vh",
    width: "100%"

  }
  return (
    <footer className='bg-dark text-light py=3' style={footerstyle}>
        <p className="text-center " >Copyright &copy; MyToDoList.com</p>
    </footer>
  );
}
