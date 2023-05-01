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
        .map(item => (<ExpenseItem title={item.title}
                                   price={item.price}
                                   date={item.date}/>))

    return (
        <Card className={"expenses"}>
            <ExpenseFilter onFilter={expenseFilterHandler} year={yearFilter}/>
            {expenses}
        </Card>
    )
}

export default ExpenseList;