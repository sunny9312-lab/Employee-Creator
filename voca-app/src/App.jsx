import "./App.css";
import Header from "./component/Header/Header";
import DayList from "./component/DayList/DayList";
import Day from "./component/Day/Day";
// import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <DayList />

      <Day />
    </>
  );
}

export default App;
