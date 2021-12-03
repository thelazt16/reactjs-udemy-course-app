import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [openForm, setOpenForm] = useState(false);
  const saveExpenseDataHandler = (inputExpenseData) => {
    // Used to passed the data up the tree component
    let timenow = new Date().getTime();
    const expenseData = {
      ...inputExpenseData,
      id: timenow,
    };
    props.onAddExpense(expenseData);
    setOpenForm(false);
  };

  const formOpenHandler = () => {
    setOpenForm(true);
  };
  const formCloseHandler = () => {
    setOpenForm(false);
  };
  return (
    <div className="new-expense">
      {!openForm ? (
        <button onClick={formOpenHandler}> Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={formCloseHandler}
        />
      )}
      {/* the onSaveExpenseData can be named anything, used to pass the data UP to the upper component from the bottom component tree */}
    </div>
  );
};

export default NewExpense;
