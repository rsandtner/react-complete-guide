import 'components/expense/ExpenseItem.css'
import Card from "components/ui/Card";
import ExpenseDate from "components/expense/ExpenseDate";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">$ {props.price}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;