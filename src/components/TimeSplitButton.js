import React from 'react';

export default function TimeSplitButton({date, action}) {
  return (
    <div className="split-box">
      <div>
        <label> Current split is {(date.length) ? date[date.length - 1].toString() : 'not set'} </label>
      </div>
      <div>
        <button onClick={action}>Time Split</button>
      </div>
    </div>
  )
}
