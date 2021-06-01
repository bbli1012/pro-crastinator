import React from 'react';

const SplitsDisplay = ({splits}) =>{

  return (
    <div className="flex flex-col-reverse overflow-hidden border-2">
      {splits.map((split, idx) => {
        return (
          <div className="row" key={idx}>
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
