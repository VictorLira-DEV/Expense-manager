import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import styles from './ExpenseComponents.module.css';
import Card from '../UI/Card';
import { useState } from 'react';


function ExpenseComponents(props) {
    const [filteredYear, setFilterChangeHandler] = useState('2020');

    const filterChangeHandler = function (selectedYear) {
        
        setFilterChangeHandler(selectedYear);
    }

    return (
        <div>
            <Card className={styles.expenses}>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.item.map(expense => < ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />)
                }
            </Card>
        </div>
    );
}

export default ExpenseComponents;