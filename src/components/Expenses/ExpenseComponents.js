import ExpensesFilter from "./ExpensesFilter";
import styles from "./ExpenseComponents.module.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpenseList";

function ExpenseComponents(props) {
  const [filteredYear, setFilterChangeHandler] = useState("2010");

  const filterChangeHandler = function (selectedYear) {
    setFilterChangeHandler(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className={styles.expenses}>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList item={ filteredExpenses }/>
      </Card>
    </div>
  );
}

export default ExpenseComponents;
