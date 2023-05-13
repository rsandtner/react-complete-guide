import 'components/expense/NewExpense.css'
import NewExpenseForm from "components/expense/NewExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false)

    const newExpanseHandler = expanse => {
        props.onNewExpense(expanse)
        setShowForm(false)
    }

    const cancelHandler = () => {
        setShowForm(false)
    }
    
    const newExenseClickHandler = () => {
        setShowForm(true)
    }
    
    const renderComponent = () => {

        if (showForm) {
            return <NewExpenseForm onNewExpense={newExpanseHandler} onCancel={cancelHandler}/>
        }

        return <button onClick={newExenseClickHandler}>Add New Expense</button>
    }
    return (
        <div className="new-expense">
            { renderComponent() }
        </div>
    )
}



export default NewExpense