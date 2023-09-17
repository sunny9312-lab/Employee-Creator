import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskCard from "./components/TaskCard/TaskCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TaskCard taskName="Clean the bathroom " priority="low" />
      <TaskCard taskName="Walk the dog" priority="high" />
      <TaskCard taskName="Do codewars " priority="very high" />
      <TaskCard taskName="Cook dinner " priority="medium" />
    </>
  );
}

export default App;
