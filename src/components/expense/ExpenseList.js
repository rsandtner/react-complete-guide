import 'components/expense/ExpenseList.css'
import Card from "components/ui/Card";
import ExpenseItem from "components/expense/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

const ExpenseList = (props) => {

    const [yearFilter, setYearFilter] = useState('2021')

    const expenseFilterHandler = (year) => {
        setYearFilter(year)
    }

    const expenses = props.items
        .filter(item => yearFilter === '' || item.date.getFullYear() === Number(yearFilter))
        .map(item => (
            <li>
                <ExpenseItem key={item.id}
                             title={item.title}
                             price={item.price}
                             date={item.date}/>
            </li>))

    return (
        <Card className={"expenses"}>
            <ExpenseFilter onFilter={expenseFilterHandler} year={yearFilter}/>
            <ul>
                {expenses}
            </ul>
        </Card>
    )
}

export default ExpenseList;