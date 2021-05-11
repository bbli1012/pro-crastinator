import React from 'react';

export default class TimeSplitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    //push date to server
    let date = new Date();
  }

  render() {
    return (
      <div>
      <label>Time Split </label>
      <button onClick={this.handleClick}>Time Split</button>
      </div>
    )
  }
}