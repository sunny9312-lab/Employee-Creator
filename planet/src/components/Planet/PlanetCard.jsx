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
      {/* <div className={cardStyles} style={{ order: diameterInKm}}>  으로 여기서도 diameter별로 order할수있다. 많이 쓰지는 않는다. 이방법 */}
      <p>planetName : {planetName}</p>
      <img src={image} alt={planetName} />
      <p>distanceFromSun : {distanceFromSun}</p>
      <p>diameterInKm : {diameterInKm}</p>
      <p>numberOfMoons : {numberOfMoons}</p>
      {/* {numberOfMoons > 0 && <p>numberOfMoons : {numberOfMoons}</p> } moon갯수가 0일때 아예 않보이게,렌더링않되게*/}
      <p>lengthOfYear : {lengthOfYear}</p>
    </div>
  );
};

export default Planet;
