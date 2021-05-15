
const createMockSplits = (numOfSplits) => {
  let splits = [];

  for(let i = 0; i < numOfSplits; i++) {
    let split = {};
    if(i === 0) {
      split.start = Date.now();
    } else {
      let prevSplit = splits[splits.length - 1];
      split.start = prevSplit.stop;
    }
    // generate an elapsed time
    let timeElapsedMS = getRandomNumberInt(0, 6) * timeMS.hr + getRandomNumberInt(0, 60) * timeMS.min + getRandomNumberInt(0, 60) * timeMS.sec;
    split.stop = split.start + timeElapsedMS;

    // generate a category and label
    split.category = categories[getRandomNumberInt(0, categories.length - 1)];

    if(split.category === "uncategorized") {
      split.label = 'undefined';
    } else {
      let labels = categoryLabels[split.category];
      split.label = labels[getRandomNumberInt(0, labels.length - 1)];
    }

     splits.push(split);
  }

  return splits;
};

const getRandomNumberInt = ( min, max ) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// constants
const timeMS = {
  sec: 1000,
  min: 60000,
  hr: 36000000,
};
const categories = [ "social", "productivity", "entertainment", "uncategorized"];
const categoryLabels = {
  social: [ "bar", "dinner", "lunch" ],
  productivity: [ "reading", "hiking", "biking", "basketball" ],
  entertainment: [ "movie", "tv", "gaming" ],
  uncategorized: [],
  };


export default createMockSplits;
