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
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpenseItem
                    title={props.item[0].title}
                    amount={props.item[0].amount}
                    date={props.item[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.item[1].title}
                    amount={props.item[1].amount}
                    date={props.item[1].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.item[2].title}
                    amount={props.item[2].amount}
                    date={props.item[2].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.item[3].title}
                    amount={props.item[3].amount}
                    date={props.item[3].date}
                ></ExpenseItem>
            </Card>
        </div>
    );
}

export default ExpenseComponents;