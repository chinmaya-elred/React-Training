import Card from '../CardUI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const formattedDate = props.date.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <Card className="expense-item">
           <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem;
