import React, { Component } from "react";
import "./App.css";
const BASE_URL = process.env.REACT_APP_RAILS_BASE_URL;
class App extends Component {
  // ------------------------------------------------------------------------------------------ //
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.form = {};
    this.state = { logs: [] };
  }
  // ------------------------------------------------------------------------------------------ //
  componentDidMount() {
    const options = { method: "get" };
    fetch(`${BASE_URL}/logs`, options)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ logs: json.logs });
      });
  }
  // ------------------------------------------------------------------------------------------ //
  create(event) {
    const body = {};
    body.date = this.form.date.value;
    body.active_calories = this.form.active_calories.value;
    body.consumed_calories = this.form.consumed_calories.value;
    body.total_exercise_minutes = this.form.total_exercise_minutes.value;
    body.seven_minute = this.form.seven_minute.value;
    body.actual_weight = this.form.actual_weight.value;
    body.total_distance_miles = this.form.total_distance_miles.value;
    body.is_fast = this.form.is_fast.checked;
    body.is_sick = this.form.is_sick.checked;
    body.is_sugar = this.form.is_sugar.checked;
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify(body)
    };
    fetch(`${BASE_URL}/logs`, options)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log("json post:", json);
      });
    event.preventDefault();
  }
  // ------------------------------------------------------------------------------------------ //
  render() {
    return (
      <div className="App">
        <form onSubmit={this.create}>
          <input type="date" ref={x => (this.form.date = x)} />
          cals
          <input type="number" ref={x => (this.form.active_calories = x)} />
          eaten
          <input type="number" ref={x => (this.form.consumed_calories = x)} />
          min
          <input
            type="number"
            ref={x => (this.form.total_exercise_minutes = x)}
          />
          7
          <input type="number" ref={x => (this.form.seven_minute = x)} />
          lbs
          <input
            type="number"
            step="any"
            ref={x => (this.form.actual_weight = x)}
          />
          miles
          <input
            type="number"
            step="any"
            ref={x => (this.form.total_distance_miles = x)}
          />
          fast
          <input type="checkbox" ref={x => (this.form.is_fast = x)} />
          sick
          <input type="checkbox" ref={x => (this.form.is_sick = x)} />
          sugar
          <input type="checkbox" ref={x => (this.form.is_sugar = x)} />
          <input type="submit" value="Submit" />
        </form>

        <table>
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
            {this.state.logs.map((log, i) => {
              return (
                <tr key={i}>
                  <td>{log.date}</td>
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
  }
}

export default App;
