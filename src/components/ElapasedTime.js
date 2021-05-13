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
    let split = date[date.length - 1];
    let timeDiff = new Date(now.getTime() - split.getTime());
    return timeDiff;
    // return timeDiff.getHours()  + ' Hrs ' + timeDiff.getMinutes() + ' Mins ' + timeDiff.getSeconds() + ' Seconds ago'
  }

  return (
    <div>
      <h1>{date.length ? 'Time since last split' : 'Current Time is'}</h1>
      <h2>{date.length ? getTimeDiff() : now.toLocaleTimeString()}.</h2>
    </div>
  );
}