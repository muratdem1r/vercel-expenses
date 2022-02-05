import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const selectYearHandler = (data) => {
    setSelectedYear(data);
  };

  const filterByYear = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSelectYear={selectYearHandler}
      />
      <ExpensesList items={filterByYear} />
    </Card>
  );
};

export default Expenses;
