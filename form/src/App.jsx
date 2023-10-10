import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ControlledForm from "./components/Form/ControlledForm";

function App() {
  const [formSuccess, setFormSuccess] = useState(false);
  const handleSubmit = (data) => {
    console.log("Form submitted");
    console.log(data);
  };

  return (
    <>
      <ControlledForm handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
