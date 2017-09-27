import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){

    var myInit = { method: 'GET',
    // headers: myHeaders,
    mode: 'cors',
    /*cache: 'default'*/ };

    fetch('http://localhost:3000/logs', myInit).then(response => {
      console.log('response:::', response);
    });








    
    console.log('mmmmmmount');
  }
  render() {
    return (
      <div className="App">
        hello world
      </div>
    );
  }
}

export default App;
