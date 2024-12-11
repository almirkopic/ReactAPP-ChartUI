import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateHandlerChange = (event) => {
    setEnteredDate(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    setIsFormVisible(false); // Hide the form after submission
  }

  return (
    <div>
      {!isFormVisible && (
        <button onClick={() => setIsFormVisible(true)}>Add New Expense</button>
      )}
      {isFormVisible && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={titleChangeHandler}
                value={enteredTitle}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
                value={enteredAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2024-12-31"
                onChange={dateHandlerChange}
                value={enteredDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={() => setIsFormVisible(false)}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ExpenseForm;
