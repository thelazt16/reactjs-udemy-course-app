import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (!props.items.length) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id} // is like id in HTML
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
        {
          /* 
      - map the array to item object
      - then return <ExpenseItem/> for each item while passing the props
    */
        }
      })}
    </ul>
  );
};

export default ExpensesList;
