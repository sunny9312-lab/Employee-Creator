import planets from "./planetData.json";
import PlanetList from "./components/PlanetList/PlanetList";
import "./App.css";

function App() {
  console.log("planets: ", planets);
  return (
    <>
      <h1>Vite + React</h1>
      <PlanetList planets={planets} />
    </>
  );
}

export default App;
