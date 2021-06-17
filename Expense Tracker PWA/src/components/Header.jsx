import React from "react";
import logo from "../asserts/expense.png";

export const Header = () => {
  return (
    <div
      className="px-3 py-2 bg-white shadow-sm"
      style={{
        fontSize: "20px",
        letterSpacing: "3px",
      }}
    >
    <img src={logo} width="30" alt="expense.png"
    />&nbsp;
      Expense Tracker App
    </div>
  );
};
