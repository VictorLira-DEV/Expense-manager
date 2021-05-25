import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import styles from './ExpenseComponents.module.css';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseComponents(props) {
    const [filteredYear, setFilterChangeHandler] = useState('2020');

    const filterChangeHandler = function (selectedYear) {
        setFilterChangeHandler(selectedYear);
    };

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className={styles.expenses}>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {filteredExpenses.map(expense => < ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />)
                }   
            </Card>
        </div>
    );
}

export default ExpenseComponents; 