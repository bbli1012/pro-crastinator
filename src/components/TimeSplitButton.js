import React, { useState } from 'react';

function TimeSplitButton() {
  const [date, setDate] = useState(false);

  /** legacy for class components
  handleClick() {
    //push date to server
    let date = new Date();
  }
  */

  // note onclick may need to be passed from parent to update parent state

  return (
    <div>
    <label>Time Split </label>
    <label> Current split is {(date) ? date : "not set"} </label>
    <button onClick={() => setDate(new Date())}>Time Split</button>
    </div>
  )
}