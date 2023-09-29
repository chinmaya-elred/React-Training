import './Error.css'

const ErrorMessage = () => {
    return (
        <div style={{ color: 'red'}} className='container'>
            <h1> Error Messge Example</h1>
            <p>TypeError: Cannot read property 'someProperty' of null</p>
            <p>SyntaxError: Unexpected token {'<'} </p>
            <p>Warning: Each child in a list should have a unique "key" prop.</p>
            <p>Invariant Violation: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.</p>
        </div>
    )
}
export default ErrorMessage