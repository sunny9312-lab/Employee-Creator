import React from "react";
import style from "./Form.module.scss";
import { useState } from "react";

const ControlledForm = ({ handleSubmit }) => {
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");

  //   const onUsernameChange = (e) => {
  //     setUsername(e.target.value);
  //   };

  //   const onEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };

  const defaultValues = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formValues);
    setFormValues(defaultValues);
  };

  const onInputChange = (event) => {
    const { name, value } = event.target; //구조분해. destructuring한다. 각 화면에 있는 데이타값들을
    console.log({ name, value });
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <div className={style.field}>
        <label htmlFor="usernameInput">Username</label>
        <input
          id="usernameInput"
          type="text"
          name="username"
          value={formValues.username}
          onChange={onInputChange}
        />
      </div>
      <div className={style.field}>
        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          type="email"
          name="email"
          value={formValues.email}
          onChange={onInputChange}
        />
      </div>
      <div className={style.field}>
        <label htmlFor="passwordInput">password</label>
        <input
          id="passwordInput"
          type="password"
          name="password"
          value={formValues.password}
          onChange={onInputChange}
        />
      </div>
      <div className={style.field}>
        <label htmlFor="passwordConfirmInput">Password Confirmation</label>
        <input
          id="passwordConfirmInput"
          type="password"
          name="passwordConfirm"
          value={formValues.passwordConfirm}
          onChange={onInputChange}
        />
      </div>
      <div className={style.field}>
        <button disabled>Register</button>
      </div>
    </form>
  );
};

export default ControlledForm;
