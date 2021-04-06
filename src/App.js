import { Provider } from "react-redux";
import store from "./redux/store";
import AddTask from "./components/addTask"
import TaskList from "./components/taskList"

function App() {
  return (
    <Provider store = { store }>
     <AddTask /> 
     <TaskList />
    </Provider>
  );
}

export default App;
