import React from 'react';
import { useState, useEffect } from 'react';

export default function ElaspsedTime({date}) {

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );

    return function cleanup() {
        clearInterval(timerID);
      };
  });

  function tick() {
    setNow(new Date());
  }

  function getTimeDiff() {
    let timeDiff = new Date(Math.abs(now.getTime() - date.start));
    return Math.floor(timeDiff/36000000)  + ' Hrs ' + timeDiff.getMinutes() + ' Mins ' + timeDiff.getSeconds() + ' Seconds ago'
  }

  return (
    <div className="time-elapsed-display border-2 rounded-lg w-1/2 py-auto my-5 mx-5">
      <h2>{date ? 'Time since last split' : 'Current Time is'}</h2>
      <h3>{date ? getTimeDiff() : now.toLocaleTimeString()}.</h3>
    </div>
  );
}