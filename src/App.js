import './App.css';

import React, { useState } from 'react';
import TimeSplitButton from './components/TimeSplitButton.js';
import ElapsedTime from './components/ElapsedTime.js';

const App = () => {
  const [dates, setDate] = useState([]);

  function handleTime() {
    let newDate = new Date();
    setDate([...dates, newDate]);
    console.log(dates);
  }

  return (
    <div className="app">
      {/* TODO: replace with header/ nav component */}
      <header className="header">
        <nav className="nav">
          <ul>
            {/* <li><a href=''>Stand-in</a></li> */}
            <li>home</li>
            <li>data</li>
          </ul>
        </nav>
        <h1>Pro-crastinator</h1>
      </header>
      <div className="row">
        {/* TODO: replace with button component */}
        <TimeSplitButton date={dates} action={handleTime} />
        {/* TODO: replace with time display component */}
        <ElapsedTime date={dates}/>
      </div>
      <div className="row">
        {/* TODO: replace with splits component */}
        <div className="splits-column">
          <div>split1</div>
          <div>split2</div>
          <div>split3</div>
        </div>
        {/* TODO: replace with average graph talk about what to use eg D3? */}
        <div className="graph-column">Graph goes here</div>
      </div>
    </div>
  );
}

export default App;
