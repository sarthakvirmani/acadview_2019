import React, { Component } from 'react';
import Display from './Display'
import './Myapp.css';

class App extends Component {
  render() {

    return (
      <div className="App">
      <div className="head"> <h1>Starting With React</h1></div>
      <h2 className="heading">MY FIRST APP </h2>
      <Display  name="Pushkar" age="21" birthmonth="October"/>
      <Display name="Rishabh" age="21" birthmonth="October"/>

      </div>
    );
  }
}
export default App;
