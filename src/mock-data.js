
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
      split.label = 'not defined';
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

const mockSplits =
[
  {
    start: 1621110905187,
    stop: 1621113067187,
    category: 'social',
    label: 'bar'
  },
  {
    start: 1621113067187,
    stop: 1621331233187,
    category: 'uncategorized',
    label: 'not defined'
  },
  {
    start: 1621331233187,
    stop: 1621442863187,
    category: 'entertainment',
    label: 'gaming'
  },
  {
    start: 1621442863187,
    stop: 1621625693187,
    category: 'entertainment',
    label: 'movie'
  },
  {
    start: 1621625693187,
    stop: 1621700608187,
    category: 'social',
    label: 'lunch'
  },
  {
    start: 1621700608187,
    stop: 1621736650187,
    category: 'social',
    label: 'dinner'
  },
  {
    start: 1621736650187,
    stop: 1621882275187,
    category: 'entertainment',
    label: 'gaming'
  },
  {
    start: 1621882275187,
    stop: 1622063076187,
    category: 'social',
    label: 'lunch'
  },
  {
    start: 1622063076187,
    stop: 1622245958187,
    category: 'social',
    label: 'lunch'
  },
  {
    start: 1622245958187,
    stop: 1622356666187,
    category: 'entertainment',
    label: 'tv'
  },
  {
    start: 1622356666187,
    stop: 1622429502187,
    category: 'uncategorized',
    label: 'not defined'
  },
  {
    start: 1622429502187,
    stop: 1622648134187,
    category: 'uncategorized',
    label: 'not defined'
  },
  {
    start: 1622648134187,
    stop: 1622866227187,
    category: 'uncategorized',
    label: 'not defined'
  },
  {
    start: 1622866227187,
    stop: 1623010848187,
    category: 'entertainment',
    label: 'movie'
  },
  {
    start: 1623010848187,
    stop: 1623157081187,
    category: 'entertainment',
    label: 'gaming'
  },
  {
    start: 1623157081187,
    stop: 1623340591187,
    category: 'productivity',
    label: 'biking'
  },
  {
    start: 1623340591187,
    stop: 1623342463187,
    category: 'productivity',
    label: 'reading'
  },
  {
    start: 1623342463187,
    stop: 1623343608187,
    category: 'entertainment',
    label: 'movie'
  },
  {
    start: 1623343608187,
    stop: 1623526542187,
    category: 'uncategorized',
    label: 'not defined'
  },
  {
    start: 1623526542187,
    stop: 1623529230187,
    category: 'social',
    label: 'dinner'
  },
  {
    start: 1623529230187,
    stop: 1623746457187,
    category: 'social',
    label: 'dinner'
  },
  {
    start: 1623746457187,
    stop: 1623928977187,
    category: 'productivity',
    label: 'reading'
  },
  {
    start: 1623928977187,
    stop: 1624148155187,
    category: 'uncategorized',
    label: 'not defined'
  },
  {
    start: 1624148155187,
    stop: 1624295303187,
    category: 'social',
    label: 'bar'
  },
  {
    start: 1624295303187,
    stop: 1624404452187,
    category: 'entertainment',
    label: 'gaming'
  },
  {
    start: 1624404452187,
    stop: 1624623569187,
    category: 'uncategorized',
    label: 'not defined'
  },
  {
    start: 1624623569187,
    stop: 1624661288187,
    category: 'social',
    label: 'bar'
  },
  {
    start: 1624661288187,
    stop: 1624770976187,
    category: 'entertainment',
    label: 'tv'
  },
  {
    start: 1624770976187,
    stop: 1624845940187,
    category: 'productivity',
    label: 'reading'
  },
  {
    start: 1624845940187,
    stop: 1624848754187,
    category: 'social',
    label: 'bar'
  },
  {
    start: 1624848754187,
    stop: 1624960079187,
    category: 'entertainment',
    label: 'movie'
  },
  {
    start: 1624960079187,
    stop: 1625035714187,
    category: 'uncategorized',
    label: 'not defined'
  },
  {
    start: 1625035714187,
    stop: 1625110142187,
    category: 'uncategorized',
    label: 'not defined'
  },
  {
    start: 1625110142187,
    stop: 1625326166187,
    category: 'productivity',
    label: 'basketball'
  },
  {
    start: 1625326166187,
    stop: 1625329763187,
    category: 'entertainment',
    label: 'gaming'
  },
  {
    start: 1625329763187,
    stop: 1625331687187,
    category: 'productivity',
    label: 'biking'
  },
  {
    start: 1625331687187,
    stop: 1625513038187,
    category: 'social',
    label: 'bar'
  },
  {
    start: 1625513038187,
    stop: 1625659692187,
    category: 'productivity',
    label: 'biking'
  },
  {
    start: 1625659692187,
    stop: 1625769794187,
    category: 'social',
    label: 'lunch'
  },
  {
    start: 1625769794187,
    stop: 1625843732187,
    category: 'social',
    label: 'lunch'
  },
  {
    start: 1625843732187,
    stop: 1625916605187,
    category: 'uncategorized',
    label: 'not defined'
  },
  {
    start: 1625916605187,
    stop: 1626135063187,
    category: 'entertainment',
    label: 'tv'
  },
  {
    start: 1626135063187,
    stop: 1626245609187,
    category: 'entertainment',
    label: 'movie'
  },
  {
    start: 1626245609187,
    stop: 1626390955187,
    category: 'uncategorized',
    label: 'not defined'
  },
  {
    start: 1626390955187,
    stop: 1626429978187,
    category: 'productivity',
    label: 'reading'
  },
  {
    start: 1626429978187,
    stop: 1626646749187,
    category: 'social',
    label: 'lunch'
  },
  {
    start: 1626646749187,
    stop: 1626684789187,
    category: 'social',
    label: 'dinner'
  },
  {
    start: 1626684789187,
    stop: 1626796418187,
    category: 'entertainment',
    label: 'gaming'
  },
  {
    start: 1626796418187,
    stop: 1626906802187,
    category: 'social',
    label: 'bar'
  },
  {
    start: 1626906802187,
    stop: 1627053021187,
    category: 'social',
    label: 'dinner'
  }
];


export  { mockSplits, categoryLabels };
