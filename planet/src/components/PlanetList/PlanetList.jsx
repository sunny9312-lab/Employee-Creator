import React from "react";
import PlanetCard from "../Planet/PlanetCard";

const PlanetList = ({ planets }) => {
  console.log("planets inside of PlanetList: ", planets);
  return (
    <div>
      {/* diameter별로 크기 소팅하는것. 작은것부터 큰것.. 혹은 scss에서 할수도 있다.*/}
      {planets
        .sort((a, b) => a.diameterInKm - b.diameterInkm)
        .map((planet, index) => (
          <PlanetCard key={index} planet={planet} />
        ))}
    </div>
  );
};

export default PlanetList;
