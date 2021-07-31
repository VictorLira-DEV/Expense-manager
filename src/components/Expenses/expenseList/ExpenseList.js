import React from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";
import styles from "./styles/ExpenseList.module.css";

const ExpensesList = (props) => {
    if (props.item.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    return (
        <ul className={styles["expenses-list"]}>
            {props.item.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;
