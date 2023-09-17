import React from "react";
import TaskCard from "./TaskCard/TaskCard";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskCard taskData={task} key={index} />
      ))}
    </div>
  );
};

export default TaskList;
