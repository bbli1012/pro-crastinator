import * as React from "react";

type AppProps = {
  date: any,
  action: Function,
}

const TimeSplitButton = ({ date, action }: AppProps) => {
  return (
    <div className="split-box border-2 rounded-lg w-1/2 my-5 mx-5 content-center">
      <div className="m-auto w-1/2">
        <label className="m-auto">
          {" "}
          Current split is {date ? date.start.toString() : "not set"}{" "}
        </label>
      </div>
      <div className="m-auto w-1/2">
        <button
          className="rounded-full border-2 p-5 bg-red-500 bg-opacity-50"
          onClick={action}
        >
          Time Split
        </button>
      </div>
    </div>
  );
}

export default TimeSplitButton;