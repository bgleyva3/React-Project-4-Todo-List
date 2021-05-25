import logo from './logo.svg';
import './App.css';
import TodoContainer from "./components/TodoContainer"

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="title">Academlo Student's Todo List</h1>
        <p className="powered-style"><i>Powered by Academlo's API</i></p>
      </div>
      
      <TodoContainer />
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
