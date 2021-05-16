export function sunburstDataParser (splits) {
  /**
   * {name: category
   * children: [
   *   {name: label, value: sum of stop - start}
   * ]]
   * }}
   */
  let data = []
  let labels = {};
  let categories = {};

  //loop through data
  for (let i = 0; i < splits.length; i++) {
    let labelName = splits[i].label;
    if (labels[labelName] == undefined) {
      labels[labelName] = splits[i].stop - splits[i].start;
      if (categories[splits[i].category] == undefined) {
        categories[splits[i].category] = {}
      };
      categories[splits[i].category][labelName] = true;
    } else {
      labels[labelName] += splits[i].stop - splits[i].start;
    }
  }

  for (let key in categories) {
    let obj = {
      name: key,
      children: []
    }
    for (label in categories[key]) {
      obj.children.push({name: label, value: labels[label]});
    }
    data.push(obj);
  }

  return data;
}


/*
labels {
  labelName: totalTime
}

categories {
  category: {
    labelNames: true
  }
}



[
  { category
    children: [
      {
        name: label
        value: totalTime
      }
    ]
  }
]

*/