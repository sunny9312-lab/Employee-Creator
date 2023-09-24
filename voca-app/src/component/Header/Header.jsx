import React from "react";

import style from "./Header.module.scss";
const Header = () => {
  return (
    <>
      <div
        className="menu"
        style={{ display: "flex", flexWrap: "wrap", gap: "10em" }}
      >
        <h1>TOEIC ENGLISH VOCA</h1>
        <div>
          <button>
            <a href="#x">Voca add</a>
          </button>

          <button className={style.button}>
            <a href="#x">Day add</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
