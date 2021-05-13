import React from 'react';

export default function TimeSplitButton({date, action}) {
  //for use with parent
  /**
  const [dates, setDate] = useState([]);

  function handleTime() {
    let newDate = new Date();
    setDate([...dates, newDate]);
  }
  */

  return (
    <div>
    <label> Current split is {(date.length) ? date[date.length - 1].toString() : 'not set'} </label>
    <button onClick={action}>Time Split</button>
    </div>
  )
}
