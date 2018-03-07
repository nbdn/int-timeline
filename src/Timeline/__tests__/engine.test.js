import TimelineEngine from '../engine';

import { timelineDataMock, timelineRuleDataMock, trialsMock1 } from './mocks';

describe('init testing', () => {
  it('throw an error if no trials are passed', () => {
    expect(() => {
      TimelineEngine();
    }).toThrow(new Error('You must fill at least one trial.'));
    expect(() => {
      TimelineEngine([]);
    }).toThrow(new Error('You must fill at least one trial.'));
  });

  it('throw an error if bad start date string is passed', () => {
    const scrollConfig = {
      breakpoint: 50,
      unitWidth: 50
    };
    expect(() => {
      TimelineEngine(trialsMock1, scrollConfig);
    }).toThrow(
      new Error(
        'You must fill a valid startDate string property with following the next format : yyyy-mm-dd.'
      )
    );

    expect(() => {
      TimelineEngine(trialsMock1, scrollConfig, 322355);
    }).toThrow(
      new Error(
        'You must fill a valid startDate string property with following the next format : yyyy-mm-dd.'
      )
    );

    expect(() => {
      TimelineEngine(trialsMock1, scrollConfig, '4123-32-43');
    }).toThrow(
      new Error(
        'You must fill a valid startDate string property with following the next format : yyyy-mm-dd.'
      )
    );
  });

  it('throw an error if no width is passed', () => {
    const dateStr = '2000-01-01';
    const scrollConfig = {
      breakpoint: 50,
      unitWidth: 50
    };
    expect(() => {
      TimelineEngine(trialsMock1, scrollConfig, dateStr);
    }).toThrow(
      new Error(
        'Error getting timeline ref width. Inspect Timeline render ref building.'
      )
    );

    expect(() => {
      TimelineEngine(trialsMock1, scrollConfig, dateStr, 'test');
    }).toThrow(
      new Error(
        'Error getting timeline ref width. Inspect Timeline render ref building.'
      )
    );
  });

  it('should throw an error if bad scrollConfig is passed ', () => {
    const dateStr = '2000-01-01';
    expect(() => {
      TimelineEngine(trialsMock1, null, dateStr, 3000);
    }).toThrow(new Error('Invalid scrollConfig object parameter'));

    expect(() => {
      TimelineEngine(
        trialsMock1,
        { breakpoint: 'banana', unitWidth: 200 },
        dateStr,
        3000
      );
    }).toThrow(new Error('Invalid scrollConfig object parameter'));

    expect(() => {
      TimelineEngine(
        trialsMock1,
        { breakpoint: 300, unitWidth: 'banana' },
        dateStr,
        3000
      );
    }).toThrow(new Error('Invalid scrollConfig object parameter'));
  });

  it('should throw an error if bad trial is passed ', () => {
    const dateStr = '2000-01-01';
    const scrollConfig = {
      breakpoint: 50,
      unitWidth: 50
    };
    const badTrialsMock = [...trialsMock1];
    badTrialsMock.push({ test: 'banana' });

    expect(() => {
      TimelineEngine(badTrialsMock, scrollConfig, dateStr, 3000);
    }).toThrow(new Error('Invalid trial end parameter at index 2'));
  });

  it('should init without crashing', () => {
    const dateStr = '2000-01-01';
    const scrollConfig = {
      breakpoint: 50,
      unitWidth: 50
    };
    TimelineEngine(trialsMock1, scrollConfig, dateStr, 3000);
  });
});

describe('should return right data', () => {
  const dateStr = '2000-01-01';
  const scrollConfig = {
    breakpoint: 50,
    unitWidth: 50
  };

  it('should return right grouped collapsing trials', () => {
    const { getGroupedCollapsingTrials } = TimelineEngine(
      trialsMock1,
      scrollConfig,
      dateStr,
      3000
    );

    expect(getGroupedCollapsingTrials()).toEqual(timelineDataMock);
  });

  it('should return right timeline rule data', () => {
    const { getTimelineRuleData } = TimelineEngine(
      trialsMock1,
      scrollConfig,
      dateStr,
      3000
    );

    expect(getTimelineRuleData()).toEqual(timelineRuleDataMock);
  });
});
