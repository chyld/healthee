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
    this.edit = this.edit.bind(this);
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
        this.setState({ logs: json.logs, id: undefined });
      });
  }
  // ------------------------------------------------------------------------------------------ //
  edit(id) {
    this.setState({ id });
  }
  // ------------------------------------------------------------------------------------------ //
  render() {
    return (
      <div className="Health">
        <div className="container">
          <h1 className="title">Healthee</h1>
        </div>
        <div className="container">
          <HealthForm
            BASE_URL={BASE_URL}
            redraw={this.redraw}
            id={this.state.id}
          />
        </div>
        <div className="container">
          <HealthList logs={this.state.logs} edit={this.edit} />
        </div>
      </div>
    );
  }
}

export default App;
