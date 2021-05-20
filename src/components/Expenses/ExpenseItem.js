import styles from "./ExpenseItem.module.css";
import React, { useState } from 'react'
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

function ExpenseItem(props) {

  return (
    <Card className={styles.expense_item}>
      <ExpenseDate date={ props.date }/>
      <div className={styles.expense_item__description}>
        <h2>{props.title}</h2>
        <div className={styles.expense_item__price}>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
