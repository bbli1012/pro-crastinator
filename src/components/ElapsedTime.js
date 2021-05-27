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
    // let split = date[date.length - 1];
    // let timeDiff = new Date(Math.abs(now.getTime() - split.getTime()));
    let timeDiff = new Date(Math.abs(now.getTime() - date.start));
    // return timeDiff.getTime();
    return Math.floor(timeDiff/36000000)  + ' Hrs ' + timeDiff.getMinutes() + ' Mins ' + timeDiff.getSeconds() + ' Seconds ago'
  }

  return (
    <div className="time-elapsed-display">
      <h2>{date ? 'Time since last split' : 'Current Time is'}</h2>
      <h3>{date ? getTimeDiff() : now.toLocaleTimeString()}.</h3>
    </div>
  );
}