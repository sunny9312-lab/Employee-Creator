import { useState } from "react";

import "./App.css";
import Clock from "./components/Clock/Clock";
import RandomJoke from "./components/RandomJoke/RandomJoke";

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <>
      <div>
        {/* <button onClick={() => setShowClock(!showClock)}>
          {showClock ? "Hide Clock" : "Show Clock"}
        </button>
        {showClock && <Clock />} */}
        {/* <RandomJoke /> */}
      </div>
    </>
  );
}

export default App;
