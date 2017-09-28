import React, { Component } from "react";
import "./HealthForm.css";

class App extends Component {
  // ------------------------------------------------------------------------------------------ //
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.clear = this.clear.bind(this);
    this.form = {};
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
    fetch(`${this.props.BASE_URL}/logs`, options).then(_ => {
      this.clear();
      this.props.redraw();
    });
    event.preventDefault();
  }
  // ------------------------------------------------------------------------------------------ //
  clear() {
    this.form.date.value = "";
    this.form.active_calories.value = "";
    this.form.consumed_calories.value = "";
    this.form.total_exercise_minutes.value = "";
    this.form.seven_minute.value = "";
    this.form.actual_weight.value = "";
    this.form.total_distance_miles.value = "";
    this.form.is_fast.checked = false;
    this.form.is_sick.checked = false;
    this.form.is_sugar.checked = false;
  }
  // ------------------------------------------------------------------------------------------ //
  render() {
    return (
      <div className="HealthForm">
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
      </div>
    );
  }
}

export default App;
