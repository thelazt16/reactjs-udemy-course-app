import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  // event object is given by default by the browser when event occurs
  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  // Start of Object Option of Use State
  // const [userInput, setUserInput] = useState({
  //   inputTitle: "",
  //   inputAmount: "",
  //   inputDate: "",
  // });

  // const titleChangeHandler = (event) => {
  //   // setUserInput({
  //   //   ...setUserInput,
  //   //   inputTitle: event.target.value,
  //   // });
  //   // You should not called like this because it delete the previous state and make the component depend on the previous state
  //   // React schedule state update, so using multiple state update a kind of mess
  //   setUserInput((prevState) => {
  //     return { ...prevState, inputTitle: event.target.value };
  //   });
  // };

  // const amountChangeHandler = (event) => {
  //   // setUserInput({
  //   //   ...setUserInput,
  //   //   inputAmount: event.target.value,
  //   // });
  //   setUserInput((prevState) => {
  //     return { ...prevState, inputAmount: event.target.value };
  //   });
  // };

  // const dateChangeHandler = (event) => {
  //   // setUserInput({
  //   //   ...setUserInput,
  //   //   inputDate: event.target.value,
  //   // });
  //   setUserInput((prevState) => {
  //     return { ...prevState, inputDate: event.target.value };
  //   });
  // };
  // End of Object
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveExpenseData(expenseData); // From NewExpense to pass the data up the tree component
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="submit" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
