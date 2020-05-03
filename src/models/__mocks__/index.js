export const handleSelectionCases = [{
    nameToChange: 'affenpinscher',
    valueToChange: false,
    initValue: [{
      name: 'affenpinscher',
      selected: true,
      subCategory: []
    }],
    newValue: [{
      name: 'affenpinscher',
      selected: false,
      subCategory: []
    }]
  },
  {
    nameToChange: 'australian,shepherd',
    valueToChange: true,
    initValue: [{
        name: 'african',
        selected: true,
        subCategory: []
      },
      {
        name: 'australian',
        selected: false,
        subCategory: [{
          name: 'shepherd',
          selected: false
        }]
      }
    ],
    newValue: [{
        name: 'african',
        selected: true,
        subCategory: []
      },
      {
        name: 'australian',
        selected: true,
        subCategory: [{
          name: 'shepherd',
          selected: true
        }]
      }
    ]
  },
  {
    nameToChange: 'buhund',
    valueToChange: true,
    initValue: [{
      name: 'buhund',
      selected: false,
      subCategory: [{
        name: 'norwegian',
        selected: false
      }]
    }],
    newValue: [{
      name: 'buhund',
      selected: true,
      subCategory: [{
        name: 'norwegian',
        selected: true
      }]
    }]
  },
  {
    nameToChange: 'bulldog,boston',
    valueToChange: true,
    initValue: [{
      name: 'bulldog',
      selected: false,
      subCategory: [{
          name: 'boston',
          selected: false
        },
        {
          name: 'english',
          selected: false
        }
      ]
    }],
    newValue: [{
      name: 'bulldog',
      selected: true,
      subCategory: [{
          name: 'boston',
          selected: true
        },
        {
          name: 'english',
          selected: false
        }
      ]
    }]
  },
  {
    nameToChange: 'mountain,swiss',
    valueToChange: true,
    initValue: [{
      name: 'mountain',
      selected: true,
      subCategory: [{
          name: 'bernese',
          selected: true
        },
        {
          name: 'swiss',
          selected: false
        }
      ]
    }],
    newValue: [{
      name: 'mountain',
      selected: true,
      subCategory: [{
          name: 'bernese',
          selected: true
        },
        {
          name: 'swiss',
          selected: true
        }
      ]
    }]
  },
  {
    nameToChange: 'samoyeds',
    valueToChange: false,
    initValue: [{
      name: 'samoyed',
      selected: true,
      subCategory: []
    }],
    newValue: [{
      name: 'samoyed',
      selected: true,
      subCategory: []
    }]
  }
]

export const getElementToRequestCases = {
  output: ['affenpinscher', 'australian', 'mountain/swiss'],
  input: [{
      name: 'affenpinscher',
      selected: true,
      subCategory: []
    },
    {
      name: 'australian',
      selected: true,
      subCategory: [{
        name: 'shepherd',
        selected: true
      }]
    },
    {
      name: 'bulldog',
      selected: false,
      subCategory: [{
          name: 'boston',
          selected: false
        },
        {
          name: 'english',
          selected: false
        }
      ]
    },
    {
      name: 'mountain',
      selected: true,
      subCategory: [{
          name: 'bernese',
          selected: false
        },
        {
          name: 'swiss',
          selected: true
        }
      ]
    }
  ]
}



export const getMultipleBreedsCase = {
  request: [{
      name: 'breed',
      selected: true,
      subCategory: []
    },
    {
      name: 'breed 2',
      selected: false,
      subCategory: []
    },
    {
      name: 'breed 3',
      selected: true,
      subCategory: []
    }
  ],
  response: {
    data: {
      status: "success",
      message: ["https://images.dog.ceo/breeds/greyhound-italian/n02091032_10079.jpg", "https://images.dog.ceo/breeds/greyhound-italian/n02091032_102.jpg"]
    }
  },
  result: [{
      title: 'breed',
      pictures: ['https://images.dog.ceo/breeds/greyhound-italian/n02091032_10079.jpg',
        'https://images.dog.ceo/breeds/greyhound-italian/n02091032_102.jpg'
      ]
    },
    {
      title: 'breed 3',
      pictures: ['https://images.dog.ceo/breeds/greyhound-italian/n02091032_10079.jpg',
        'https://images.dog.ceo/breeds/greyhound-italian/n02091032_102.jpg'
      ]
    }
  ]

}

export const getAllBreedsCases = {
  successResponse: {
    data: {
      status: "success",
      message: {
        affenpinscher: [],
        buhund: ["norwegian"]
      }
    }
  },
  successRequest: {
    affenpinscher: [],
    buhund: ["norwegian"]
  },
  errorResponse: {
    data: {
      status: "error"
    }
  },
  errorRequest: 'error'
}

export const parseCase = {
  affenpinscher: [],
  buhund: ["norwegian"]
}