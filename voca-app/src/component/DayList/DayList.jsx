import React from "react";
import dummy from "../../db/data.json";
import style from "./DayList.module.scss";

const DayList = () => {
  console.log(dummy);
  return (
    <ul className={style.list_day}>
      {dummy.days.map((day) => (
        <li key={day.id}>Day {day.day}</li>
      ))}
    </ul>
  );
};

export default DayList;
