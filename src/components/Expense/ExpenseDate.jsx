const ExpenseDate = ({ date }) => {
    const formattedDate = date.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <div className="expense-item">
            <div>{formattedDate}</div>
        </div>
    )
}
export default ExpenseDate;
