const ResultTable = ({userData}) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>

        {userData?.map((data) => {
          return (
            <tr>
              <td>{data?.year}</td>
              <td>{data?.savingsEndOfYear}</td>
              <td>{data?.yearlyContribution}</td>
              <td>{data?.yearlyInterest}</td>
              <td>{data?.yearlyInterest}</td>
            </tr>
          )
        })}

      </tbody>
    </table>
  )
}
export default ResultTable