import Counter from "./components/Counter/Counter";
import {} from "./App.css";
import Card from "./components/Card/Card";
import StyledCounter from "./components/StyledCounter/StyledCounter";
import NameList from "./components/NameList/NameList";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";

function App() {
  const [filterValue, setFilterValue] = useState(" ");
  return (
    <>
      <Counter />
      <Card
        title="First Card"
        content="here is some text that we hide by default"
      />
      <Card title="Second Card" content="here is another text" />
      <StyledCounter />
      <SearchBar setFilterValue={setFilterValue} />
      <NameList filterValue={filterValue} />
    </>
  );
}

export default App;
