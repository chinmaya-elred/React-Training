import { useState } from "react";
import Header from "./Header/Header";
import ResultTable from "./ResultTable/ResultsTable";
import UserInput from "./UserInput/UserInput";

const Calculator = () => {

    const [userInput, setUserInput] = useState(null);

    const calculateHandler = (userInput) => {
        console.log(userInput)
        setUserInput(userInput)
    }

    const yearlyData = [];

    let currentSavings = +userInput?.["current-savings"];
    const yearlyContribution = +userInput?.["yearly-contribution"];
    const expectedReturn = +userInput?.["expected-return"] / 100;
    const duration = +userInput?.["duration"];

    for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution
        });
    }
    console.log(yearlyData)

    return (
        <div>
            <Header />
            <UserInput calculateResult={calculateHandler} />
            <ResultTable userData ={yearlyData}/>
        </div>
    );
}

export default Calculator;
