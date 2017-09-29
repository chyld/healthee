import React from "react";
import "./HealthList.css";

export default props => {
  return (
    <div className="HealthList">
      <table className="table is-bordered is-striped is-narrow is-fullwidth">
        <thead>
          <tr>
            <th>Date</th>
            <th>Active</th>
            <th>Passive</th>
            <th>Burned</th>
            <th>Consumed</th>
            <th>Net</th>
            <th>Pounds</th>
            <th>Weight</th>
            <th>Miles</th>
            <th>Minutes</th>
            <th>7 Min</th>
            <th>Sugar?</th>
            <th>Fast?</th>
            <th>Sick?</th>
          </tr>
        </thead>
        <tbody>
          {props.logs.map((log, i) => {
            return (
              <tr key={i}>
                <td>
                  <button
                    className="button is-info is-outlined is-small"
                    onClick={_ => props.edit(log.id)}
                  >
                    {log.date}
                  </button>
                </td>
                <td>{log.active_calories}</td>
                <td>{log.passive_calories}</td>
                <td>{log.burned_calories}</td>
                <td>{log.consumed_calories}</td>
                <td>{log.net_calories}</td>
                <td>{log.net_pounds}</td>
                <td>{log.actual_weight}</td>
                <td>{log.total_distance_miles}</td>
                <td>{log.total_exercise_minutes}</td>
                <td>{log.seven_minute}</td>
                <td>{log.is_sugar.toString()}</td>
                <td>{log.is_fast.toString()}</td>
                <td>{log.is_sick.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
