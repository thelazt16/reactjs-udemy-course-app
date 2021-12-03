import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (!enteredName.trim().length || !enteredUserAge.trim().length) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      // + is used to convert string to number
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUsername("");
    // setEnteredAge("");
    // setError();
  };
  // const addUserHandler = (event) => {
  //   event.preventDefault();
  //   if (!enteredUsername.trim().length || !enteredAge.trim().length) {
  //     setError({
  //       title: "Invalid input",
  //       message: "Please enter a valid name and age (non-empty values)",
  //     });
  //     return;
  //   }
  //   if (+enteredAge < 1) {
  //     // + is used to convert string to number
  //     setError({
  //       title: "Invalid age",
  //       message: "Please enter a valid age (>0)",
  //     });
  //     return;
  //   }
  //   props.onAddUser(enteredUsername, enteredAge);
  //   setEnteredUsername("");
  //   setEnteredAge("");
  //   setError();
  // };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const dismissHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismiss={dismissHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button onClick={addUserHandler}>Add User</Button>
        </form>
      </Card>
      {/* Before using Ref */}
      {/* <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button onClick={addUserHandler}>Add User</Button>
        </form>
      </Card> */}
    </Wrapper>
  );
};

export default AddUser;
