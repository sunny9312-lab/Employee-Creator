import style from "./Form.module.scss";
import { useRef, useState } from "react";

const RefForm = ({ handleSubmit }) => {
  const [error, setError] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formRef.current);
    const form = formRef.current;
    const data = new FormData(form);

    const userData = {};
    for (let key of data.keys()) {
      //   console.log(key);   키값이 제대로 넘어오는지 확인해봄 username,email,password, passwordconfirm
      userData[key] = data.get(key);
    }
    console.log(userData); //이거 찍으면 데이타가 object형태로 들어오는것이 보인다
    const isValid = validateForm(userData);
    if (isValid) {
      handleSubmit(userData);
      form.reset();
    } else {
      //do real error handling
      //   alert("Invalid data");
      setError("Fix form errors");
    }

    // console.log(data.get("username"));
    // console.log(data.get("email"));
    // console.log(data.get("password"));
    // console.log(data.get("passwordConfirm"));
  };

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

  const formRef = useRef(null);

  console.log("Form rerenders");
  return (
    <>
      <form className={style.form} onSubmit={onSubmit} ref={formRef}>
        <div className={style.field}>
          <label htmlFor="usernameInput">Username</label>
          <input id="usernameInput" type="text" name="username" />
        </div>
        <div className={style.field}>
          <label htmlFor="emailInput">Email</label>
          <input id="emailInput" type="email" name="email" />
        </div>
        <div className={style.field}>
          <label htmlFor="passwordInput">password</label>
          <input id="passwordInput" type="password" name="password" />
        </div>

        <div className={style.field}>
          <label htmlFor="passwordConfirmInput">Password Confirmation</label>
          <input
            id="passwordConfirmInput"
            type="password"
            name="passwordConfirm"
          />
        </div>

        <div className={style.field}>
          <button>Register</button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default RefForm;
