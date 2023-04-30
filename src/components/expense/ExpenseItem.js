import 'components/expense/ExpenseItem.css'
import Card from "components/ui/Card";
import ExpenseDate from "components/expense/ExpenseDate";
import {useState} from "react";

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)

    const changeTitleHandler = () => {
        setTitle('Changed!')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {props.price}</div>
            </div>

            <button onClick={ changeTitleHandler }>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;