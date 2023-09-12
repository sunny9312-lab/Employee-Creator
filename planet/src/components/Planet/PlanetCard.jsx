import React from "react";
import style from "./PlanetCard.module.scss";

const Planet = ({ planet }) => {
  const {
    planetName,
    image,
    distanceFromSun,
    diameterInKm,
    numberOfMoons,
    lengthOfYear,
  } = planet;

  // const cardStyles = [style.card];
  // if (numberOfMoons === 0) {
  //   cardStyles.push(style.grey__background);
  //   console.log("yes, greybackground");
  // }
  const cardStyles = `${style.card} ${
    numberOfMoons === 0 ? style.moonless : ""
  }`;

  return (
    <div className={cardStyles}>
      <p>planetName : {planetName}</p>
      <img src={image} alt={planetName} />
      <p>distanceFromSun : {distanceFromSun}</p>
      <p>diameterInKm : {diameterInKm}</p>
      <p>numberOfMoons : {numberOfMoons}</p>
      <p>lengthOfYear : {lengthOfYear}</p>
    </div>
  );
};

export default Planet;
