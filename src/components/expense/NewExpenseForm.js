import 'components/expense/NewExpenseForm.css';
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

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onNewExpense({...formData});

        setFormData({
            title: '',
            price: '',
            date: '',
        })
    };

    return (<form onSubmit={formSubmitHandler}>
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
                       onChange={changeHandler('price')}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31"
                       onChange={changeHandler('date')}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>);
};

export default NewExpenseForm;