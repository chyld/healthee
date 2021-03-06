import React, { Component } from "react";
import "./HealthForm.css";

class App extends Component {
  // ------------------------------------------------------------------------------------------ //
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.clear = this.clear.bind(this);
    this.set = this.set.bind(this);
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

    const isNew = this.form.id.value === "";

    const options = {
      headers: { "Content-Type": "application/json" },
      method: isNew ? "post" : "put",
      body: JSON.stringify(body)
    };
    fetch(
      `${this.props.BASE_URL}/logs/${this.form.id.value}`,
      options
    ).then(_ => {
      this.clear();
      this.props.redraw();
    });
    event.preventDefault();
  }
  // ------------------------------------------------------------------------------------------ //
  clear() {
    this.form.id.value = "";
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
  set(log) {
    this.form.id.value = log.id;
    this.form.date.value = log.date;
    this.form.active_calories.value = log.active_calories;
    this.form.consumed_calories.value = log.consumed_calories;
    this.form.total_exercise_minutes.value = log.total_exercise_minutes;
    this.form.seven_minute.value = log.seven_minute;
    this.form.actual_weight.value = log.actual_weight;
    this.form.total_distance_miles.value = log.total_distance_miles;
    this.form.is_fast.checked = log.is_fast;
    this.form.is_sick.checked = log.is_sick;
    this.form.is_sugar.checked = log.is_sugar;
  }
  // ------------------------------------------------------------------------------------------ //
  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== undefined) {
      const options = { method: "get" };
      fetch(`${this.props.BASE_URL}/logs/${nextProps.id}`, options)
        .then(response => {
          return response.json();
        })
        .then(json => {
          this.set(json);
        });
    }
  }
  // ------------------------------------------------------------------------------------------ //
  render() {
    return (
      <div className="HealthForm">
        <form onSubmit={this.create}>
          <input type="hidden" ref={x => (this.form.id = x)} />
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="date"
                    ref={x => (this.form.date = x)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    placeholder="Active Calories"
                    type="number"
                    ref={x => (this.form.active_calories = x)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    placeholder="Consumed Calories"
                    type="number"
                    ref={x => (this.form.consumed_calories = x)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    placeholder="Minutes Exercised"
                    type="number"
                    ref={x => (this.form.total_exercise_minutes = x)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    placeholder="# 7-Min"
                    type="number"
                    ref={x => (this.form.seven_minute = x)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    placeholder="Weight"
                    type="number"
                    step="any"
                    ref={x => (this.form.actual_weight = x)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    placeholder="Miles Traveled"
                    type="number"
                    step="any"
                    ref={x => (this.form.total_distance_miles = x)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <label>Fast?</label>
                  <input type="checkbox" ref={x => (this.form.is_fast = x)} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <label>Sick?</label>
                  <input type="checkbox" ref={x => (this.form.is_sick = x)} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <label>Sugar?</label>
                  <input type="checkbox" ref={x => (this.form.is_sugar = x)} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="button is-danger"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
