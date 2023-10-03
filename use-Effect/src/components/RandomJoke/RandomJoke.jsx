import React, { useEffect, useState } from "react";

const RandomJoke = () => {
  const [jokeData, setJokeData] = useState(null);
  useEffect(() => {
    fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      //   .then((data) => console.log(data));
      .then((data) => setJokeData(data));
  }, []);
  return (
    <div>
      {jokeData && <p>{jokeData.joke}</p>}
      {/* {jokeData && <p>Joke</p>} */}
      <button>Refresh Joke</button>
    </div>
  );
};

export default RandomJoke;
