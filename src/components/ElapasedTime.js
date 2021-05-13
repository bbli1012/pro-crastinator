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

  return (
    <div>
      <h1>{date.length ? 'Time since last split' : 'Current Time is'}</h1>
      <h1>{now}</h1>
    </div>
  );
}