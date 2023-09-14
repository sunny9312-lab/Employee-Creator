import Counter from "./components/Counter/Counter";
import {} from "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Counter />
      <Card
        title="First Card"
        content="here is some text that we hide by default"
      />
      <Card title="Second Card" content="here is another text" />
    </>
  );
}

export default App;
