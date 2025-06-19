import './App.css';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';

function App() {
  const onDelete=(todo)=> {
          
  }
  let todos= [
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
  ]
  return (
    <>
      <Header title='MyToDoList'/>
      <Todos Todos={todos} onDelete={onDelete}/>
      <Footer/> 
    </>

  );
}

export default App;
