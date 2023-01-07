import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (val) => {
    setTasks((prevState) => [...prevState, val]);
  }
  const deleteTask = (i) => {
    const tempTasks = tasks.filter((item, index) => {
      if(index == i){
        return false;
      }
      return true;
    });
    setTasks(tempTasks);
  }
  const taskEdit = (taskTitle, i) => {
    const tempTasks = tasks.map((item, index) => {
      if(index == i){
        return taskTitle;
      }
      return item;
    });
    setTasks(tempTasks);
  }
  return (
    <div className='app'>
      <div className='container'>
        <TaskForm addTaskHandler={addTask}/>
        <TasksList tasks={tasks} deleteHandler={deleteTask} editHandler={taskEdit}/>
      </div>
    </div>
  );
}

export default App;
