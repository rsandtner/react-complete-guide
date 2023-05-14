import ExpenseChart from 'components/expense/ExpenseChart';
import ExpenseFilter from 'components/expense/ExpenseFilter';
import ExpenseItem from 'components/expense/ExpenseItem';
import 'components/expense/ExpenseList.css';
import Card from 'components/ui/Card';
import { useState } from 'react';

const ExpenseList = (props) => {
  const [yearFilter, setYearFilter] = useState('2021');

  const expenseFilterHandler = (year) => {
    setYearFilter(year);
  };

  const expenses = props.items.filter((item) => yearFilter === '' || item.date.getFullYear() === Number(yearFilter));
  const expenseItems = expenses.map((item) => (
    <li>
      <ExpenseItem key={item.id} title={item.title} price={item.price} date={item.date} />
    </li>
  ));

  return (
    <div>
      <Card className="expenses">
        <ExpenseChart items={expenses} />
        <ExpenseFilter onFilter={expenseFilterHandler} year={yearFilter} />
        <ul>{expenseItems}</ul>
      </Card>
    </div>
  );
};

export default ExpenseList;
