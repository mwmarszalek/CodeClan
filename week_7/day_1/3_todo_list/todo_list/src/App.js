import './App.css';
import React,{useState} from 'react';

function App() {

  const [tasks,setTasks] = useState([
  {task_name: "Feed the Dog", priority: "high"},
  {task_name: "Clean Windows",priority: "high"},
  {task_name: "Do The Dishes", priority: "low"},
  {task_name: "Do The Laundry",priority: "low"}]);

  const [newTask,setNewTask] = useState("");


  const taskNodes = tasks.map((task,index) => {
    return <li key={index} className={task.priority}>
      <span id="task-name"><b>{task.task_name}</b></span>
          </li>
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  
  const saveNewTask = (event) => {
    event.preventDefault()
    const copyTasks = [...tasks]
    copyTasks.push({task_name: newTask, priority: event.target.radio.value})
    setTasks(copyTasks)
    setNewTask("")
  
  }

  return (
    <div className="App">
      
      <h1>Task List</h1>


      <ul>
        {taskNodes}
      </ul>
    
      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task">Add new task:</label>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}/>
        <input type="submit" value="Save New Task"/>
        <b>High</b><input type="radio" id="high" name="radio" value="high"/>
        <b>Low</b><input type="radio" id="low" name="radio" value="low"/>
        



      </form>



    </div>
  );
}

export default App;
