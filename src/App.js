import './App.css';

import React, { useState, useEffect } from 'react';
import TimeSplitButton from './components/TimeSplitButton.js';
import ElapsedTime from './components/ElapsedTime.js';
import SplitsDisplay from './components/SplitsDisplay.js';

// TODO: remove after database implementation
import { mockSplits, mockLabels } from './mock-data.js';

const App = () => {
  const [dates, setDate] = useState([]);
  const [splits, setSplits] = useState([]);

  useEffect(()=>{
    // TODO: change to database get request later
    setSplits(mockSplits);
  }, []);

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
        <SplitsDisplay splits={splits} mockLabels={mockLabels} setSplits={setSplits}/>
        {/* TODO: replace with average graph talk about what to use eg D3? */}
        <div className="graph-column">Graph goes here</div>
      </div>
    </div>
  );
}

export default App;
