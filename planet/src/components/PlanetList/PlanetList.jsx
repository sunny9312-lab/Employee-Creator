import React from "react";
import PlanetCard from "../Planet/PlanetCard";

const PlanetList = ({ planets }) => {
  console.log("planets inside of PlanetList: ", planets);
  return (
    <div>
      {planets.map((planet, index) => (
        <PlanetCard key={index} planet={planet} />
      ))}
    </div>
  );
};

export default PlanetList;
