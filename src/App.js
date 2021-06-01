import './App.css';

import React, { useState, useEffect } from 'react';
import TimeSplitButton from './components/TimeSplitButton.js';
import ElapsedTime from './components/ElapsedTime.js';
import SplitsDisplay from './components/SplitsDisplay.js';

// TODO: remove after database implementation
import mockSplits from './mock-data.js';

const App = () => {
  const [date, setDate] = useState(false);
  const [splits, setSplits] = useState([]);

  useEffect(()=>{
    // TODO: change to database get request later
    setSplits(mockSplits);
  }, []);

  function handleTime() {
    let genDate = new Date();

    if (date) {
      let newSplit = {...date};
      newSplit.stop = genDate.getTime();
      setSplits([...splits, newSplit])
    };

    let newDate = {
      start: genDate.getTime(),
      stop: undefined,
      category: 'uncategorized',
      label: 'not defined'
    };

    setDate(newDate);
  };

  return (
    <div className="box-border border-2 rounded mx-auto w-3/4 h-screen">
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
      <div className="flex flex-row justify-around h-1/3">
        {/* TODO: replace with button component */}
        <TimeSplitButton date={date} action={handleTime} />
        {/* TODO: replace with time display component */}
        <ElapsedTime date={date}/>
      </div>
      <div className="flex flex-row justify-around h-2/3">
        <SplitsDisplay splits={splits}/>
        {/* TODO: replace with average graph talk about what to use eg D3? */}
        <div className="">Graph goes here</div>
      </div>
    </div>
  );
}

export default App;
