import React from 'react';

const SplitsDisplay = ({splits}) =>{

  const onClick = (e) => {
  }

  return (
    <div className="splits-column">
      {splits.map((split, idx) => {
        return (
          <div className="row" key={idx}>
            <div>
              {split.start}
            </div>
            {/* {split.label === 'not defined'
            ? <data
            : <div className={split.category}>
                {split.label}
              </div>
            } */}
          </div>
        )
      })}
    </div>
  )
}

export default SplitsDisplay;
