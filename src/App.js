//import logo from './logo.svg';
import './App.css';
//import TaskForm from './components/Container/Form/TaskForm';
import TaskListComponent from './components/Container/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header1">
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
