import React from "react";
import style from "./Banner.module.scss";

const Banner = ({ text }) => {
  return (
    <div className={style.container}>
      <div className={style.banner}>{text}</div>
    </div>
  );
};

export default Banner;
