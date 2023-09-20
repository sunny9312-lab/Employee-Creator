import { useState } from "react";
import taskData from "./data/taskData";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState(taskData);
  console.log("tasks(0): ", tasks[0]);
  // console.log("tasks(1): ", tasks[1]);
  // console.log("tasks(2): ", tasks[2]);
  // console.log("tasks(3): ", tasks[3]);

  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => index !== i);
    setTasks(filteredTasks);
  };

  const createTask = (taskObject) => {
    setTasks([...tasks, taskObject]);
  };

  return (
    <>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      {/* 위에것는 prop drilling */}
      <AddTask createTask={createTask} />
    </>
  );
}

export default App;
