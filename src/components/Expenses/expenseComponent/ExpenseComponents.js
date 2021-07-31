import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import styles from "./styles/ExpenseComponent.module.css";
import Card from "../../UI/Card";
import { useState } from "react";
import ExpensesList from "../expenseList/ExpenseList";
import ExpensesChart from "../expenesChart/ExpensesChart";

function ExpenseComponents(props) {
    const [filteredYear, setFilterChangeHandler] = useState("2010");

    const ChangeFilter = function (selectedYear) {
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
                    onChangeFilter={ChangeFilter}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList item={filteredExpenses} />
            </Card>
        </div>
    );
}

export default ExpenseComponents;
