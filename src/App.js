import "./App.css";
import {firebaseAuth} from './provider/AuthProvider'
import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from "react-router-dom";
import TimeSplitButton from "./components/TimeSplitButton.js";
import ElapsedTime from "./components/ElapsedTime.js";
import SplitsDisplay from "./components/SplitsDisplay.js";
import SunburstChart from "./components/SunburstChart.js";
import Signup from "./components/Signup.js";

// TODO: remove after database implementation
import { mockSplits, mockLabels } from "./mock-data.js";

const App = () => {
  const [date, setDate] = useState(false);
  const [splits, setSplits] = useState([]);
  const {handleSignup} = useContext(firebaseAuth);
  console.log(handleSignup);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // TODO: change to database get request later
    setSplits(mockSplits);
  }, []);

  function handleTime() {
    let genDate = new Date();

    if (date) {
      let newSplit = { ...date };
      newSplit.stop = genDate.getTime();
      setSplits([...splits, newSplit]);
    }

    let newDate = {
      start: genDate.getTime(),
      stop: undefined,
      category: "uncategorized",
      label: "not defined",
    };

    setDate(newDate);
  }

  return (
    <Router>
      <div class="h-screen w-screen my-auto">
        <div className="box-border border-2 rounded mx-auto w-3/4 h-5/6 ">
          {/* TODO: replace with header/ nav component */}
          <header className="header">
            <nav className="nav">
              <ul>
                {/* <li><a href=''>Stand-in</a></li> */}
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
            <h1>Pro-crastinator</h1>
          </header>
          <Switch>
            <Redirect exact from="/" to={login ? "/home" : "/login"} />
            <Route path='/home'>
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
            </Route>
            <Route path='/login'>
              //insert login component
              <div>login component</div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
