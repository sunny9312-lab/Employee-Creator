//npm install react-hook-form 작업후 만들어졌다. 이번 hookform은
//npm install yup ,yup은 validation library이다. 이것을 통하여, schema를 할수 있다.
//npm install @hookform/resolvers

import { useForm } from "react-hook-form";
import style from "./Form.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
//import * as yup from "yup";  이것은 스키마 있는곳에서 필요하다

const HookForm = ({ formSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  //스키마를 여기서도 정의 할수 있고 따로 화일로 뺄수도 있다.
  // const schema = yup.object({
  //   username: yup
  //     .string()
  //     .required("Please enter a username")
  //     .min(6, "Username must be at least 6 characters"),
  //   email: yup
  //     .string()
  //     .required("Email is required")
  //     .email("Email must be a valid email address"),
  //   password: yup
  //     .string()
  //     .required("Password is required")
  //     .min(6, "password must be at least 6 characters"),
  //   passwordConfirm: yup
  //     .string()
  //     .oneOf([yup.ref("password")], "Passwords must match"),
  // });
  //

  //데이타가 잘 되는지 시험하는 임시submit
  // const exampleSubmit = (data) => {
  //   console.log("Form submitted");
  //   console.log(data);
  // };

  console.log("Form renders");
  console.log(errors);
  return (
    <form className={style.form} onSubmit={handleSubmit(formSubmit)}>
      <div className={style.field}>
        <label htmlFor="usernameInput">Username</label>
        <input
          id="usernameInput"
          type="text" //이 밑부분을 스키마 처리 할수 있다.
          // {...register("username", {
          //   required: "please enter a username",
          //   minLength: {
          //     value: 3,
          //     message: "username must be at least 3 characters",
          //   },
          {...register("username")}
        />
        {/* <input id="usernameInput" type="text" {...register("username")} /> */}
        {errors.username && (
          <p className={style.error}>{errors.username.message}</p>
          // <p className={style.error}>Username is required.</p>
        )}
      </div>
      <div className={style.field}>
        <label htmlFor="emailInput">Email</label>
        <input id="emailInput" type="email" {...register("email")} />
        {errors.email && <p className={style.error}>{errors.email.message}</p>}
      </div>
      <div className={style.field}>
        <label htmlFor="passwordInput">Password</label>
        <input id="passwordInput" type="password" {...register("password")} />
        {errors.password && (
          // <p className={style.error}>Password is required</p>
          <p className={style.error}>{errors.password.message}</p>
        )}
      </div>

      <div className={style.field}>
        <label htmlFor="passwordConfirmInput">Password Confirmation</label>
        <input
          id="passwordConfirmInput"
          type="password"
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm && (
          <p className={style.error}>{errors.passwordConfirm.message}</p>
        )}
      </div>

      <div className={style.field}>
        <button>Register</button>
      </div>
    </form>
  );
};

export default HookForm;
