import ExpenseForm from "../expenseForm/ExpenseForm";
import { useState } from "react";
import styles from "./styles/NewExpense.module.css";

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpanse(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className={styles["new-expense"]}>
            <div>
                {!isEditing && (
                    <button onClick={startEditingHandler}>
                        Add New Expense
                    </button>
                )}
                {isEditing && (
                    <ExpenseForm
                        onSaveExpenseData={saveExpenseDataHandler}
                        onCancel={stopEditingHandler}
                    />
                )}
            </div>
        </div>
    );
}

export default NewExpense;
