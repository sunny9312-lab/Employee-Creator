import React, { useEffect, useState } from "react";
import { getRandomJoke } from "../../services/joke-services";

const RandomJoke = () => {
  const [jokeData, setJokeData] = useState(null);
  useEffect(() => {
    getRandomJoke()
      //   .then((data) => console.log(data));  알렉스나 마티나 한테 물어볼것. useeffect가 제대로 한번만 마운트 되지않고,두번되고 있슴.
      .then((data) => setJokeData(data))
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = () => {
    getRandomJoke()
      .then((data) => setJokeData(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {jokeData && <p>{jokeData.joke}</p>}
      <button onClick={onButtonClick}>Refresh Joke</button>
    </div>
  );
};

export default RandomJoke;
