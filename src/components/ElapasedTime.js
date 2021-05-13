import React from 'react';
import { useState, useEffect } from 'react';


export default function ElaspsedTime({date}) {

  const [now, setNow] = useState(new Date());

  return (
    <div>
      <h1>{date.length ? 'Time since last split' : 'Current Time is'}</h1>
    </div>
  );
}