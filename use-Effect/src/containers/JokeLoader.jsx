import React, { useState } from "react";
import { JokeList } from "../components/JokeList/JokeList";

const JokeLoader = () => {
  const [jokes, setJokes] = useState([]);
  return <JokeList jokes={jokes} />;
};

export default JokeLoader;
