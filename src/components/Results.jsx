import React from "react";
import { calculateInvestmentResults } from "../util/investment";

function Results({ inputUser }) {
  const resultsData = calculateInvestmentResults(inputUser);
  console.log(resultsData);

  return <p>Results</p>;
}

export default Results;
