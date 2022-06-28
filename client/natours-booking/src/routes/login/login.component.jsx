import axios from "axios";
import { useState } from "react";

const defaultLoginFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginFields, setLoginFields] = useState(defaultLoginFields);
  const { email, password } = loginFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const responseData = await res.json();
      console.log("RES", responseData);
      setLoginFields(defaultLoginFields);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "email":
        setLoginFields({
          ...loginFields,
          [event.target.name]: event.target.value,
        });
        break;
      case "password":
        setLoginFields({
          ...loginFields,
          [event.target.name]: event.target.value,
        });
        break;
      default:
        console.log("Check");
    }
  };

  return (
    <div className="login">
      <h3>Log into your account</h3>
      <form className="login__form" onSubmit={handleSubmit}>
        <label>Email address</label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          pattern=".{8,}"
          placeholder="password"
          onChange={handleChange}
          value={password}
        />
        <button className="login__btn" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
