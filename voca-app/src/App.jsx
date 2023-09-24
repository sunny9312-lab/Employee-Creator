import "./App.css";
import Header from "./component/Header/Header";
import DayList from "./component/DayList/DayList";
import Day from "./component/Day/Day";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />

        <Route path="/">
          <DayList />
        </Route>
        <Route path="/day">
          <Day />
        </Route>
      </>
    </BrowserRouter>
  );
}

export default App;
