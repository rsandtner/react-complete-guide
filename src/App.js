import 'App.css';
import ExpenseList from "components/expense/ExpenseList";

function App() {

  const expenses = [
    new Expense('Toilet Paper', 94.12, new Date(2020, 7, 14)),
    new Expense('New TV', 799.49, new Date(2021, 2, 12)),
    new Expense('Car Insurance', 294.67, new Date(2021, 2, 28)),
    new Expense('New Desk (Wooden)', 450, new Date(2021, 5, 12)),
  ]

  return (
      <div>
        <ExpenseList items={expenses}/>
      </div>
  );
}

export default App;

class Expense {
  constructor(title, price, date) {
    this.title = title
    this.price = price
    this.date = date
  }
}