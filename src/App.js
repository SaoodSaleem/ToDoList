import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import InputForm from "./components/enterForm";
import TaskList from "./components/taskList";
import store from "./redux/store";
import {Container, Jumbotron} from "reactstrap"

function App() {
  return (
    <Provider store = { store }>
      <Jumbotron style={{textAlign: "center"}}><h1 className="display-3" style={{textAlign: "center", display: "inline-block"}}>Task Manager</h1>
      <p 
      style = {{ display: "inline-block" }}
      >(React/Redux)</p></Jumbotron>
      <Container>
      <InputForm/>
      <TaskList/>
      </Container>
    </Provider>
  );
}

export default App;
