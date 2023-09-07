import React from "react";
import style from "./Card.module.scss";
import Banner from "../Banner/Banner";

// eslint-disable-next-line react/prop-types
const Card = ({ imageURL, albumTitle, bandName, albumRating }) => {
  const backgroundStyles = {
    backgroundImage: "url(" + imageURL + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className={style.card} style={backgroundStyles}>
      {albumRating === 5 && <Banner text="Top Rating" />}

      <h3 className={style.card__heading}>Album Title: {albumTitle}</h3>
      <h4 className={style.card__heading}>Band Name: {bandName}</h4>
      <h5 className={style.card__heading}>Album Rating: {albumRating}</h5>
    </div>
  );
};

export default Card;
