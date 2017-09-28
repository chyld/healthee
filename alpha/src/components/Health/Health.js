import React, { Component } from "react";
import "./Health.css";
import HealthForm from "../HealthForm/HealthForm";
import HealthList from "../HealthList/HealthList";

const BASE_URL = process.env.REACT_APP_RAILS_BASE_URL;

class App extends Component {
  // ------------------------------------------------------------------------------------------ //
  constructor(props) {
    super(props);
    this.redraw = this.redraw.bind(this);
    this.state = { logs: [] };
  }
  // ------------------------------------------------------------------------------------------ //
  componentDidMount() {
    this.redraw();
  }
  // ------------------------------------------------------------------------------------------ //
  redraw() {
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
  render() {
    return (
      <div className="Health">
        <HealthForm BASE_URL={BASE_URL} redraw={this.redraw} />
        <HealthList logs={this.state.logs} />
      </div>
    );
  }
}

export default App;
