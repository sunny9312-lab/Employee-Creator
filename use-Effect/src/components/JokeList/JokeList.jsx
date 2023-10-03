import React from "react";

export const JokeList = ({ jokes }) => {
  return (
    <ul>
      {jokes.map((jokeData) => (
        <li key={jokeData.id}>{jokeData.joke}</li>
      ))}
    </ul>
  );
};
