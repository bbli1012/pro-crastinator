export default function sunburstDataParser(splits: any) {
  /**
   * {name: category
   * children: [
   *   {name: label, value: sum of stop - start}
   * ]]
   * }}
   */

  let data = [];
  let labels: any = {};
  let categories: any = {};

  let dummy = [
    {
      name: "social",
      children: [
        {
          name: "bar",
          value: 481578000,
        },
        {
          name: "lunch",
          value: 839409000,
        },
        {
          name: "dinner",
          value: 440216000,
        },
      ],
    },
    {
      name: "uncategorized",
      children: [
        {
          name: "not defined",
          value: 1717238000,
        },
      ],
    },
    {
      name: "entertainment",
      children: [
        {
          name: "gaming",
          value: 627863000,
        },
        {
          name: "movie",
          value: 550467000,
        },
        {
          name: "tv",
          value: 438854000,
        },
      ],
    },
    {
      name: "productivity",
      children: [
        {
          name: "biking",
          value: 332088000,
        },
        {
          name: "reading",
          value: 298379000,
        },
        {
          name: "basketball",
          value: 216024000,
        },
      ],
    },
  ];

  console.log(splits);

  if (!splits.length) {
    return dummy;
  }

  //loop through data
  for (let i = 0; i < splits.length; i++) {
    let labelName : string = splits[i].label;
    if (labels[labelName] === undefined) {
      labels[labelName] = splits[i].stop - splits[i].start;
      if (categories[splits[i].category] === undefined) {
        categories[splits[i].category] = {};
      }
      categories[splits[i].category][labelName] = true;
    } else {
      labels[labelName] += splits[i].stop - splits[i].start;
    }
  }

  for (let key in categories) {
    let obj: any = {
      name: key,
      children: [],
    };
    for (let label in categories[key]) {
      obj.children.push({ name: label, value: labels[label] });
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
