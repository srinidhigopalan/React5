import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class AgeStats extends Component {
  timeSince(date) {
    let today = new Date().getTime();
    let other_date = new Date(date).getTime();
    let difference = Math.abs(today - other_date);

    let days = Math.floor(difference / (1000 * 3600 * 24));
    let years = Math.floor(days / 365);
    

    return `You are ${years} years old`;
  }

  render() {
    return (
      <div>
        <h4>{this.timeSince(this.props.date)}</h4>
      </div>
    );
  }
}

export default AgeStats;