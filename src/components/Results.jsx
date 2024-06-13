import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Results({ inputUser }) {
  const resultsData = calculateInvestmentResults(inputUser);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Intrest (Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((result) => {
          const totalIntrest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;

          const totalAmountInvested = result.valueEndOfYear - totalIntrest;

          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td> {formatter.format(result.valueEndOfYear)} </td>
              <td> {formatter.format(result.interest)} </td>
              <td> {formatter.format(totalIntrest)} </td>
              <td> {formatter.format(totalAmountInvested)} </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
