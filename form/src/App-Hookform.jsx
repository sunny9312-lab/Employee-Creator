import { useState } from "react";
import ControlledForm from "./components/Form/ControlledForm";
import RefForm from "./components/Form/RefForm";
import HookForm from "./components/Form/HookForm";

function App() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [username, setUsername] = useState("");

  const formSubmit = (data) => {
    console.log("Form submitted");
    console.log(data);
    setFormSuccess(true);
    setUsername(data.username);
  };
  return (
    <>
      <HookForm formSubmit={formSubmit} />
      {formSuccess && <p>Successfully submitted form {username}</p>}
    </>
  );
}

export default App;
