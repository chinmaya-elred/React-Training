import { useState } from "react";

const userInputs ={
    'current-savings' : 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10
}

const UserInput = ({ calculateResult }) => {
    const [userInput, setUserInput] = useState(userInputs);

    const handleChangeInput =(name, value) =>{
        console.log(name, value)
        setUserInput([{...userInput, [name] : value}])
    }

     const handleCalculate =(e)=>{
        console.log('submit')
        e.preventDefault();
        calculateResult(userInput);
     }

     const resetCalculate =(e)=>{
        e.preventDefault();
        console.log('reset')
        setUserInput(userInputs)
     }

    return (
        <form className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" value={userInput['current-savings']} onChange={(e) => handleChangeInput('current-savings',e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" value={userInput['yearly-contribution']} onChange={(e) => handleChangeInput('yearly-contribution',e.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" value={userInput['expected-return']}  onChange={(e) => handleChangeInput('expected-return',e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" value={userInput['duration']}  onChange={(e) => handleChangeInput('duration',e.target.value)}/>
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={(e) => resetCalculate(e)}>
                    Reset
                </button>
                <button type="submit" className="button" onClick={(e) => handleCalculate(e)}>
                    Calculate
                </button>
            </p>
        </form>
    )
}
export default UserInput