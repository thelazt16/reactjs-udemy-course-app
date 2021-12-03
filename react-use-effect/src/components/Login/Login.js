import React, { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    // This will run every render cycle (state change, re-render)
    // no dependencies
    console.log("Effect Running");
  });

  useEffect(() => {
    // This will run once after render cycle but not after
    // empty dependencies
    console.log("Effect Ran");
  }, []);

  useEffect(() => {
    // This setFormIsValid is bad practice if you use it to send http request since it will send multiple the request everytime there's a change in enteredEmail/Password, instead of doing this you can use setTimeout() to send the request afer the timeout end.
    // setFormIsValid(
    //   enteredEmail.includes("@") && enteredPassword.trim().length > 6
    // );
    const timeoutIdentifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    // We return a function since this function will be executed the 2nd time (and so on) the useEffect is triggered
    return () => {
      // in this function we reset the timeout so when the user hasn't finished typing the setFormIsValid when never get called out
      console.log("Cleaning timeout!");
      clearTimeout(timeoutIdentifier);
    };
  }, [
    // Dependencies
    // This means the useEffect() will only run when either enteredEmail/Password is changed
    enteredEmail,
    enteredPassword,
  ]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@")); // This is bad practice because we change the value of a state with another state value, this could goes wrong because the enteredEmail state might not been updated when we set the emailIsValid state, so we actually using outdated value. And that's where useReducer comes to play.
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
