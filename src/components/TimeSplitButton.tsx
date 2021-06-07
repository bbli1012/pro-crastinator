import * as React from "react";

export default function TimeSplitButton({ date, action }) {
  return (
    <div className="split-box border-2 rounded-lg w-1/2 my-5 mx-5 content-center">
      <div class="m-auto w-1/2">
        <label class="m-auto">
          {" "}
          Current split is {date ? date.start.toString() : "not set"}{" "}
        </label>
      </div>
      <div class="m-auto w-1/2">
        <button
          class="rounded-full border-2 p-5 bg-red-500 bg-opacity-50"
          onClick={action}
        >
          Time Split
        </button>
      </div>
    </div>
  );
}
