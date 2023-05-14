import 'App.css';
import ExpenseList from 'components/expense/ExpenseList';
import NewExpense from 'components/expense/NewExpense';
import { useState } from 'react';

export class Expense {
  id;
  constructor(title, price, date) {
    this.id = Math.random();
    this.title = title;
    this.price = price;
    this.date = date;
  }
}

const dummy_expenses = [
  new Expense('Toilet Paper', 94.12, new Date(2020, 7, 14)),
  new Expense('New TV', 799.49, new Date(2021, 2, 12)),
  new Expense('Car Insurance', 294.67, new Date(2021, 2, 28)),
  new Expense('New Desk (Wooden)', 450, new Date(2021, 5, 12)),
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const newExpenseHandler = (expense) => {
    setExpenses((previous) => [expense, ...previous]);
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <ExpenseList items={expenses} />
    </div>
  );
}

export default App;
