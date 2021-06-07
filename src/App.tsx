import "./App.css";

import React, { useState, useEffect, FunctionComponent } from "react";
import TimeSplitButton from "./components/TimeSplitButton";
import ElapsedTime from "./components/ElapsedTime";
import SplitsDisplay from "./components/SplitsDisplay";
import SunburstChart from "./components/SunburstChart";

// TODO: remove after database implementation
import { mockSplits, mockLabels } from "./mock-data";
import { string } from "@amcharts/amcharts4/core";

const App:FunctionComponent<any> = () => {
  const [date, setDate] = useState<any>('');
  const [splits, setSplits] = useState<any>([]);

  interface IDate {
    start: number,
    stop: number | undefined,
    category: string,
    label: string
  };

  useEffect(() => {
    // TODO: change to database get request later
    setSplits(mockSplits);
  }, []);

  function handleTime() {
    let genDate = new Date();

    if (date) {
      let newSplit: any = { ...date };
      newSplit.stop = genDate.getTime();
      setSplits([...splits, newSplit]);
    }

    let newDate: IDate = {
      start: genDate.getTime(),
      stop: undefined,
      category: "uncategorized",
      label: "not defined",
    };

    setDate(newDate);
  }

  return (
    <div className="h-screen w-screen my-auto">
      <div className="box-border border-2 rounded mx-auto w-3/4 h-5/6 ">
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
          <TimeSplitButton date={date} action={handleTime} />
          <ElapsedTime date={date} />
        </div>
        <div className="flex flex-row justify-around h-2/3">
          <SplitsDisplay
            splits={splits}
            mockLabels={mockLabels}
            setSplits={setSplits}
          />
          <SunburstChart splits={splits} />
        </div>
      </div>
    </div>
  );
};

export default App;
