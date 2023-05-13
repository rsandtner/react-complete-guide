import 'components/expense/NewExpenseForm.css';
import {Expense} from 'App';
import {useState} from 'react';

const NewExpenseForm = (props) => {

    const [formData, setFormData] = useState({
        title: '', price: '', date: '',
    });

    const changeHandler = field => {
        return (event) => {
            setFormData(prevState => {
                return {
                    ...prevState, [field]: event.target.value,
                };
            });
        };
    };
    
    const resetForm = () => {
        setFormData({
            title: '',
            price: '',
            date: '',
        })
    }

    const formSubmitHandler = (event) => {

        event.preventDefault()
        props.onNewExpense(new Expense(formData.title, formData.price, new Date(formData.date)))
        resetForm()
    };
    
    const formResetHandler = () => {
        props.onCancel()
    }

    return (<form onSubmit={formSubmitHandler} onReset={formResetHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"
                       onChange={changeHandler('title')}
                       value={formData.title}/>
            </div>
            <div className="new-expense__control">
                <label>Price</label>
                <input type="number" min="0.01" step="0.01"
                       onChange={changeHandler('price')}
                       value={formData.price}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31"
                       onChange={changeHandler('date')}
                       value={formData.date}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="reset">Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>);
};

export default NewExpenseForm;