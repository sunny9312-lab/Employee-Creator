import React from "react";
import style from "./TaskCard.module.scss";

const TaskCard = ({ taskName, priority }) => {
  const onDeleteBtn = (event) => {
    console.log("delete button excuted");
  };

  return (
    <div className={style.card}>
      <h2>taskName: {taskName}</h2>
      <h2>priority: {priority}</h2>
      <button onClick={onDeleteBtn}>Delete</button>
    </div>
  );
};

export default TaskCard;
