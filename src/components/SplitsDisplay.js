import React from 'react';

const SplitsDisplay = ({ splits, mockLabels, setSplits }) => {

  const onChange = (e) => {
    let splitIdx = e.target.className;
    let newLabel = e.target.value;
    //need to create deep copy of splits
  }

  return (
    <div className="splits-column">
      {splits.map((split, idx) => {
        return (
          <div className="row" key={idx}>
            <div>
              {split.start}
            </div>
            {split.label === 'not defined'
              ? <>
                  <input list="labels" placeholder={split.label} onChange={onChange} className={idx}/>
                  <datalist id="labels">
                    { mockLabels.map((label, idx) => <option value={label} key={idx} />) }
                  </datalist>
                </>
              : <div className={ split.category }>
                  { split.label }
                </div>
            }
          </div>
        )
      })}
    </div>
  )
}

export default SplitsDisplay;
