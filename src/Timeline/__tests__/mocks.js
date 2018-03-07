const trialsMock1 = [
  { start: 5, end: 50, title: 'Study of Bendamustine' },
  { start: 55, end: 85, title: 'ASCT With Nivolumab' },
  { start: 70, end: 100, title: 'Study of Stockolm' },
  { start: 60, end: 72, title: 'Bortezomib' },
  { start: 90, end: 129, title: 'Bortezomib' },
  { start: 90, end: 110, title: 'Qicong' },
  { start: 90, end: 150, title: 'Continuation' },
  { start: 140, end: 160, title: 'Hypnotherappy' },
  { start: 161, end: 190, title: 'Cancer treatments' },
  { start: 200, end: 220, title: 'Cancer treatments' },
  { start: 205, end: 230, title: 'Qicong' }
];

const trialsMock2 = [
  { start: 5, end: 60, title: 'Study of Bendamustine' },
  { start: 55, end: 85, title: 'ASCT With Nivolumab' },
  { start: 56, end: 83, title: 'Qicong' },
  { start: 25, end: 55, title: 'Hypnotherappy' },
  { start: 90, end: 115, title: 'Bortezomib' }
];

const trialsMock3 = [
  { start: 5, end: 10, title: 'Study of Bendamustine' },
  { start: 10, end: 20, title: 'ASCT With Nivolumab' },
  { start: 20, end: 80, title: 'Cancer treatments' },
  { start: 80, end: 90, title: 'Hypnotherappy' },
  { start: 90, end: 115, title: 'Bortezomib' }
];

const trialsMock4 = [
  { start: 1, end: 10, title: 'Bortezomib' },
  { start: 1.3, end: 18, title: 'Study of Bendamustine' }
];

const trialsMock5 = [
  { start: 13, end: 35, title: 'Study of Bendamustine' },
  { start: 20, end: 110, title: 'ASCT With Nivolumab' },
  { start: 70, end: 90, title: 'Study of Stockolm' },
  { start: 60, end: 72, title: 'Bortezomib' },
  { start: 60, end: 129, title: 'Bortezomib' },
  { start: 150, end: 190, title: 'Continuation Qicong' },
  { start: 160, end: 170, title: 'Continuation' },
  { start: 140, end: 160, title: 'Hypnotherappy treatments' },
  { start: 200, end: 250, title: 'Cancer treatments' },
  { start: 200, end: 220, title: 'Cancer treatments' },
  { start: 205, end: 230, title: 'Qicong' },
  { start: 265, end: 290, title: 'Qicong treatments' }
];

const timelineRuleDataMock = {
  units: [
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019
  ],
  monthCount: 228,
  unitWidth: 150
};

const timelineDataMock = [
  {
    items: [
      [
        {
          start: 5,
          end: 50,
          title: 'Study of Bendamustine'
        }
      ]
    ],
    start: 5,
    end: 50
  },
  {
    items: [
      [
        {
          start: 55,
          end: 85,
          title: 'ASCT With Nivolumab'
        },
        {
          start: 90,
          end: 110,
          title: 'Qicong'
        },
        {
          start: 140,
          end: 160,
          title: 'Hypnotherappy'
        }
      ],
      [
        {
          start: 60,
          end: 72,
          title: 'Bortezomib'
        },
        {
          start: 90,
          end: 129,
          title: 'Bortezomib'
        }
      ],
      [
        {
          start: 70,
          end: 100,
          title: 'Study of Stockolm'
        }
      ],
      [
        {
          start: 90,
          end: 150,
          title: 'Continuation'
        }
      ]
    ],
    start: 55,
    end: 160
  },
  {
    items: [
      [
        {
          start: 161,
          end: 190,
          title: 'Cancer treatments'
        }
      ]
    ],
    start: 161,
    end: 190
  },
  {
    items: [
      [
        {
          start: 200,
          end: 220,
          title: 'Cancer treatments'
        }
      ],
      [
        {
          start: 205,
          end: 230,
          title: 'Qicong'
        }
      ]
    ],
    start: 200,
    end: 230
  }
];

export {
  timelineDataMock,
  timelineRuleDataMock,
  trialsMock1,
  trialsMock2,
  trialsMock3,
  trialsMock4,
  trialsMock5
};
