import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ControlledForm from "./components/Form/ControlledForm";
import RefForm from "./components/Form/RefForm";

function App() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [username, setUsername] = useState("");

  const handleSubmit = (data) => {
    console.log("Form submitted");
    console.log(data);
    setFormSuccess(true);
    setUsername(data.username);
  };

  return (
    <>
      <ControlledForm handleSubmit={handleSubmit} />
      {formSuccess && <p>Successfully submitted form {username}</p>}
    </>
  );
}

export default App;
