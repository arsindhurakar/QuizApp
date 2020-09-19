import React, { useState } from "react";
import Modal from "react-modal";
import { BsX } from "react-icons/bs";

import { stylesheet } from "typestyle";

import { Colors } from "../../constants/colors";
import { newUser } from "../../utils/authHandlers";
import { emailValidation } from "../../utils/formValidators";
import { usernameValidation } from "../../utils/formValidators";
import { passwordValidation } from "../../utils/formValidators";

import Input from "../../components/input";
import Button from "../../components/button";

Modal.setAppElement("#root");

const classNames = stylesheet({
  signupForm: {
    width: "380px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    padding: "1rem",
    background: "#F5F5F5",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px -3px rgba(158,155,155,0.9)",
  },

  nameDetails: {
    display: "flex",
    justifyContent: "space-between",
  },

  x: {
    position: "absolute",
    top: "3px",
    right: "3px",

    border: "none",
    outline: "0",
    cursor: "pointer",
    background: "#F5F5F5",
  },

  successMessage: {
    color: Colors.SUCCESS,
  },

  errorMessage: {
    color: Colors.DANGER,
    fontSize: "12px",
  },
});

const Signup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [emailErr, setEmailErr] = useState("");
  // const [usernameErr, setUsernameErr] = useState("");
  // const [passwordErr, setPasswordErr] = useState("");
  // const [userExistsErr, setUserExistsErr] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const [formValidation, setFormValidation] = useState({
    emailErr: "",
    usernameErr: "",
    passwordErr: "",
    userExistsErr: "",
  });

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const { emailErr, usernameErr, passwordErr, userExistsErr } = formValidation;
  const { fname, lname, username, password, confirmPassword, email } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormClose = () => {
    setIsModalOpen(false);
    setUser({
      fname: "",
      lname: "",
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    });

    setFormValidation({
      emailErr: "",
      usernameErr: "",
      passwordErr: "",
      userExistsErr: "",
    });

    setSuccessMessage("");
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const validEmail = emailValidation(email);
    const validUsername = usernameValidation(username);
    const validPassword = passwordValidation(password, confirmPassword);

    if (typeof validEmail === "string") {
      setFormValidation({
        emailErr: validEmail,
      });
      return;
    } else {
      setFormValidation({
        emailErr: "",
      });
    }

    if (typeof validUsername === "string") {
      setFormValidation({
        usernameErr: validUsername,
      });
      return;
    } else {
      setFormValidation({
        usernameErr: "",
      });
    }

    if (typeof validPassword === "string") {
      setFormValidation({
        passwordErr: validPassword,
      });
      return;
    } else {
      setFormValidation(() => ({
        passwordErr: "",
      }));
    }

    let userRegistration = newUser(email, username, password, fname, lname);

    if (typeof userRegistration === "string") {
      setFormValidation({
        userExistsErr: userRegistration,
      });
    } else {
      setTimeout(() => {
        setUser({
          fname: "",
          lname: "",
          username: "",
          password: "",
          confirmPassword: "",
          email: "",
        });

        setSuccessMessage(`${username} registerd successfully`);
      }, 500);
    }
  };

  return (
    <div className="signup">
      <Button position="center" onClick={() => setIsModalOpen(true)}>
        Create New Account
      </Button>
      <Modal className={classNames.signupForm} isOpen={isModalOpen}>
        <h2>Sign Up</h2>
        <button className={classNames.x} onClick={handleFormClose}>
          <BsX size="2rem" color="gray" />
        </button>

        <p>It's quick and easy.</p>
        <hr style={{ marginBottom: "1rem" }} />
        <form onSubmit={handleSignup}>
          <span className={classNames.successMessage}>{successMessage}</span>
          <span className={classNames.errorMessage}>{userExistsErr}</span>
          <div className={classNames.nameDetails}>
            <Input
              inputType="small"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="fname"
              value={fname}
            ></Input>
            <Input
              inputType="small"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lname"
              value={lname}
            ></Input>
          </div>
          <span className={classNames.errorMessage}>{emailErr}</span>
          <Input
            inputType="small"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={email}
          ></Input>

          <span className={classNames.errorMessage}>{usernameErr}</span>
          <Input
            inputType="small"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            name="username"
            value={username}
          ></Input>

          {<span className={classNames.errorMessage}>{passwordErr}</span>}
          <Input
            inputType="small"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={password}
          ></Input>

          <Input
            inputType="small"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          ></Input>

          <p style={{ color: "gray", fontSize: "11px", marginBottom: "1rem" }}>
            By clicking Sign Up, you agree to our Terms and Policies.
          </p>

          <Button type="submit" width="full" buttonType="primary">
            Sign Up
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Signup;
