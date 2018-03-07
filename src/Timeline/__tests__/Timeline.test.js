import React from 'react';
import { shallow } from 'enzyme';
import Timeline from '../';

import { trialsMock1, timelineRuleDataMock, timelineDataMock } from './mocks';

describe('component rendering right', () => {
  const startDate = '2000-01-01';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Timeline trials={trialsMock1} startDate={startDate} />);
  });

  it('renders trials right', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('render right number of items groups', () => {
    expect(wrapper.find('.TimelineItemsGroupsWrapper').children()).toHaveLength(
      timelineDataMock.length + 1
    );
  });
});

describe('has right state & props', () => {
  const scrollConfigMock = {
    breakpoint: 50,
    unitWidth: 150
  };
  const startDate = '2000-01-01';
  const wrapper = shallow(
    <Timeline
      trials={trialsMock1}
      scrollConfig={scrollConfigMock}
      startDate={startDate}
    />
  );

  describe('component has right state', () => {
    it('has right timelineReady state', () => {
      expect(wrapper.state('timelineReady')).toBeTruthy();
    });

    it('has right timelineItemsGroups state', () => {
      expect(wrapper.state('timelineItemsGroups')).toEqual(timelineDataMock);
    });

    it('has right timelineRuleData state', () => {
      expect(wrapper.state('timelineRuleData')).toEqual(timelineRuleDataMock);
    });
  });

  describe('component has right props', () => {
    it('pass right props to TimelineGrid', () => {
      expect(
        wrapper
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .prop('units')
      ).toEqual(timelineRuleDataMock.units);
      expect(
        wrapper
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .prop('unitWidth')
      ).toEqual(timelineRuleDataMock.unitWidth);
    });

    it('pass right props to TimelineRule', () => {
      expect(
        wrapper
          .childAt(0)
          .childAt(1)
          .prop('units')
      ).toEqual(timelineRuleDataMock.units);
      expect(
        wrapper
          .childAt(0)
          .childAt(1)
          .prop('unitWidth')
      ).toEqual(timelineRuleDataMock.unitWidth);
    });
  });
});

describe('component structure', () => {
  const scrollConfigMock = {
    breakpoint: 50,
    unitWidth: 150
  };
  const startDate = '2000-01-01';
  const wrapper = shallow(
    <Timeline
      trials={trialsMock1}
      scrollConfig={scrollConfigMock}
      startDate={startDate}
    />
  );

  it('has timeline right wrapper class name', () => {
    expect(wrapper.hasClass('Timeline')).toBeTruthy();
  });

  it('has right wrapper class name', () => {
    expect(
      wrapper
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .name()
    ).toEqual('TimelineGrid');
  });

  it('has TimelineItemsGroups classname wrapper', () => {
    expect(
      wrapper
        .childAt(0)
        .childAt(0)
        .hasClass('TimelineItemsGroupsWrapper')
    ).toBeTruthy();
  });

  it('has TimelineRule child', () => {
    expect(
      wrapper
        .childAt(0)
        .childAt(1)
        .name()
    ).toEqual('TimelineRule');
  });
});
