import React from "react"; // Don't need to be imported in the modern JSX
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // props can be named anything
  // const [title, setTitle] = useState(props.title); // useState() must be called directly inside Component which is ExpenseItem, not inside another method such as clickHandler()
  // console.log("ExpenseItem evaluated by React"); // Called depending on the amount data in the property

  // const expenseDate = new Date(2021, 28, 2);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  // => Should be saved in App.js using props

  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();
  // Splitting Component is the best way for react
  // Split it to ExpenseDate.js

  return (
    // Before using props
    // <div className="expense-item">
    //   <div>{expenseDate.toISOString()}</div>
    //   <div className="expense-item__description">
    //     <h2>{expenseTitle}</h2>
    //     <div className="expense-item__price">{expenseAmount}</div>
    //   </div>
    // </div>
    // End of Before using props

    // Using props, before split
    // <div className="expense-item">
    //   <div>
    //     <div>{month}</div>
    //     <div>{day}</div>
    //     <div>{year}</div>
    //   </div>
    //   <div className="expense-item__description">
    //     <h2>{props.title}</h2>
    //     <div className="expense-item__price">${props.amount}</div>
    //   </div>
    // </div>
    // End of before split
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
