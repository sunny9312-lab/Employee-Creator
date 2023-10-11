import React from "react";
import style from "./Form.module.scss";
import { useState, useEffect } from "react";

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
  const [isFormValid, setIsFormValid] = useState(false);

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

  useEffect(() => {
    //각 필드의 validation을 체크하기 위해서, useEffect릇 사용하였다. formValue가 바뀔때마다 확인하면 되니까
    const isValid = validateForm(formValues);
    setIsFormValid(isValid);
  }, [formValues]);

  const validateForm = (data) => {
    // for (let key in data) {
    //   if (data[key].length === 0) return false;
    // }       데이타가 들어있으면 true. 그렇지 않으면 false하고 바로 빠진다.
    // return true;

    if (data.username === "") return false;
    if (data.email === "") return false;
    if (data.password === "") return false;
    if (data.passwordConfirm !== data.password) return false;
    return true;
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
      {formValues.password.length > 0 && ( //password가 없으면 컨펌 파스워드는 아예않나타나게
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
      )}
      <div className={style.field}>
        <button disabled={!isFormValid}>Register</button>
      </div>
    </form>
  );
};

export default ControlledForm;
