import React, { useState } from "react";

import { stylesheet } from "typestyle";

import { loginUser } from "../../utils/authHandlers";
import { Colors } from "../../constants/colors";

import Button from "../../components/button";
import Input from "../../components/input";
import Signup from "./signup";

import { useHistory } from "react-router";

const classNames = stylesheet({
  loginForm: {
    margin: "2rem",
    width: "25rem",
    padding: "1rem",
    background: "#F5F5F5",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px -3px rgba(158,155,155,0.9)",
  },

  loginFailedErr: {
    color: Colors.DANGER,
    fontSize: "12px",
  },
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState("");

  const history = useHistory();

  const handleLogin = () => {
    let login = loginUser(username, password);
    setTimeout(() => {
      if (!login) {
        setErr("Incorrect Username or Password");
      } else {
        setErr("");
        window.localStorage.setItem("loggedIn", "true");
        history.push("/dashboard");
        setUsername("");
        setPassword("");
      }
      window.localStorage.setItem("loggedInUser", JSON.stringify(login));
    }, 300);
  };

  return (
    <form className={classNames.loginForm}>
      <span className={classNames.loginFailedErr}>{err}</span>
      <Input
        inputType="large"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></Input>
      <Input
        inputType="large"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
      <Button width="full" buttonType="primary" onClick={handleLogin}>
        Login
      </Button>
      <hr
        style={{
          marginBottom: "1rem",
        }}
      />
      <Signup />
    </form>
  );
};

export default Login;
