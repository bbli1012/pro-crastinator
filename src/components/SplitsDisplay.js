import React from "react";

const SplitsDisplay = ({ splits, mockLabels, setSplits }) => {
  const onChange = (e) => {
    let { className: splitIdx, value: newLabel } = e.target;
    // TODO: need to create deep copy of splits? Might be more expensive
    // TOD: there is a slice variation as well
    let newSplits = splits.map((split, idx) => {
      if (idx === Number(splitIdx)) {
        return { ...split, label: newLabel };
      } else {
        return split;
      }
    });
    setSplits(newSplits);
  };

  return (
    <div className="flex flex-col-reverse overflow-scroll overflow-x-hidden border-2 rounded-lg w-1/2 h-5/6 py-auto my-5 mx-5">
      {splits.map((split, idx) => {
        let start = new Date(split.start);
        let stop = new Date(split.stop);
        let duration = split.stop - split.start;
        let hrs, mins;
        if (duration >= 86400000) {
          duration = null;
        } else {
          hrs = Math.floor(duration / 3600000);
          mins = duration % 3600000;
          mins = Math.floor(mins / 60000);
        }

        return (
          <div
            className="flex flex-row justify-between border rounded my-2 mx-5"
            key={idx}
          >
            <div>
              {stop.toLocaleTimeString()} <br />
              {start.toLocaleTimeString()}
            </div>
            <div>
              {!duration
                ? "too long"
                : hrs +
                  " hrs " +
                  mins +
                  " mins "}
            </div>
            {split.label === "not defined" ? (
              <>
                <input
                  list="labels"
                  placeholder={split.label}
                  onChange={onChange}
                  className={idx}
                />
                <datalist id="labels">
                  {mockLabels.map((label, idx) => (
                    <option value={label} key={idx} />
                  ))}
                </datalist>
              </>
            ) : (
              <div className={split.category}>{split.label}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SplitsDisplay;
