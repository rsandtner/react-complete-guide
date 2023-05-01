import 'components/expense/NewExpense.css'
import NewExpenseForm from "components/expense/NewExpenseForm";

const NewExpense = (props) => {
    return (
        <div className="new-expense">
            <NewExpenseForm onNewExpense={ props.onNewExpense }/>
        </div>
    )
}

export default NewExpense