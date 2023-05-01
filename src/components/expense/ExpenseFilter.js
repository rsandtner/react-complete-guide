import 'components/expense/ExpenseFilter.css'

const ExpenseFilter = (props) => {

    const filterChangeHandler = (event) => {
        props.onFilter(event.target.value)
    }

    return (
        <div className="expenses-filter">
            <label>Filter by year</label>
            <select onChange={filterChangeHandler}>
                <option value="" defaultValue>choose year</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;