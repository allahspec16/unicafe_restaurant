import React from "react";
const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  )
}
const Statistics = (props) => {
  return ( 
    <>
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad} />
          <StatisticLine text="Total" value={props.total} />
          <StatisticLine text="Average" value={props.average.toFixed(1)} />
          <StatisticLine text="Positive" value={`${props.positive.toFixed(1)} %`} />
        </tbody>
      </table>
       {/* <StatisticLine text="Average" value={props.average.toFixed(2)} /> */}
       {/* <StatisticLine text="Positive" value={`${props.positive.toFixed(2)}%`} /> */}
  </>
   );
}
 
export default Statistics;