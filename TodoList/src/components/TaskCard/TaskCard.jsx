import React from "react";
import style from "./TaskCard.module.scss";

const TaskCard = ({ taskData, deleteTask, taskIndex }) => {
  const { task, priority } = taskData;
  const onDeleteBtn = (event) => {
    console.log("delete button excuted");
    console.log("taskIndex: ", taskIndex);
    deleteTask(taskIndex);
  };

  return (
    <div className={style.card}>
      <h2> {task}</h2>
      <h2>priority: {priority}</h2>
      <button className={style.button} onClick={onDeleteBtn}>
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
