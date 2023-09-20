import React from "react";
import TaskCard from "./TaskCard/TaskCard";
import AddTask from "./AddTask";
import { rankPriority } from "../data/priorities";

const TaskList = ({ tasks, deleteTask }) => {
  const sortedTasks = tasks.sort(
    (a, b) => rankPriority(a.priority) - rankPriority(b.priority)
  );

  console.log(sortedTasks);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1em" }}>
      {sortedTasks.map((task, index) => (
        <TaskCard
          taskData={task}
          key={index}
          deleteTask={deleteTask}
          taskIndex={index}
        />
      ))}
    </div>
  );
};

export default TaskList;
