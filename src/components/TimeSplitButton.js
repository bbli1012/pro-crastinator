import React, { useState } from 'react';

function TimeSplitButton() {
  const [date, setDate] = useState(false);

  /** legacy for class components
  handleClick() {
    //push date to server
    let date = new Date();
  }
  */

  return (
    <div>
    <label>Time Split </label>
    <label> Current split is {(date) ? date : "not set"} </label>
    <button onClick={() => setDate(new Date())}>Time Split</button>
    </div>
  )
}