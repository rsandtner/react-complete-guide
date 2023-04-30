import 'components/expense/ExpenseList.css'
import Card from "components/ui/Card";
import ExpenseItem from "components/expense/ExpenseItem";

const ExpenseList = (props) => {

    const expenses = props.items.map(item => (<ExpenseItem title={item.title}
                                                           price={item.price}
                                                           date={item.date} />))

    return (
        <Card className={"expenses"}>
            {expenses}
        </Card>
    )
}

export default ExpenseList;