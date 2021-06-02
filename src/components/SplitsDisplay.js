import React from 'react';

const SplitsDisplay = ({splits}) =>{

  return (
    <div className="flex flex-col-reverse overflow-scroll overflow-x-hidden border-2 rounded-lg w-1/2 h-5/6 py-auto my-5 mx-5">
      {splits.map((split, idx) => {

        return (
          <div className="flex flex-row justify-between border rounded my-2 mx-5" key={idx}>
            <div>
              {split.start}
            </div>
            <div className={split.category}>
              {split.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SplitsDisplay;
