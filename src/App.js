import React, { Component } from 'react';
//import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import AgeStats from './AgeStats';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      birthday: '1985-08-05',
      showStats: false //->ternary expression
    };
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showStats: true }); //important to set default state
  }

  render() {
    return (
      <div className='App'>
       <h1>Age Calculator</h1>
          <h4>Enter your date of birth</h4>
          <input
            className='control'
            type='date'
            onChange={event => this.setState({ newDate: event.target.value })}
          />
          {''}
          <br/><br/>
          <button className=' btn bg-primary text-white' onClick={() => this.changeBirthday()}>
            Calculate Age
          </button>
          {this.state.showStats ? (
            <div >
              <AgeStats date={this.state.birthday} />
            </div>
          ) : (
            <div />
          )}
       
      </div>
    );
  }
}

export default App;