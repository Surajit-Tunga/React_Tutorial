import './App.css';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';

function App() {
  return (
    <>
      <Header title='MyToDoList'/>
      <Todos/>
      <Footer/> 
    </>

  );
}

export default App;
