import React from 'react';
import { mount, shallow } from 'enzyme';
import TimelineGrid from '../TimelineGrid';

import { timelineRuleDataMock } from '../../__tests__/mocks';

describe('component rendering right', () => {
  let wrapper;
  let emptyPropsWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <TimelineGrid
        units={timelineRuleDataMock.units}
        unitWidth={timelineRuleDataMock.unitWidth}
      />
    );
    emptyPropsWrapper = shallow(<TimelineGrid />);
  });

  it('render props right match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('render with empty props match snapshot', () => {
    expect(emptyPropsWrapper).toMatchSnapshot();
  });
});

describe('component has right props', () => {
  it('has right default props', () => {
    const wrapper = mount(<TimelineGrid />);
    expect(wrapper.prop('units')).toEqual([]);
    expect(wrapper.prop('unitWidth')).toEqual(0);
  });

  it('has right given props', () => {
    const wrapper = mount(
      <TimelineGrid
        units={timelineRuleDataMock.units}
        unitWidth={timelineRuleDataMock.unitWidth}
      />
    );
    expect(wrapper.prop('units')).toEqual(timelineRuleDataMock.units);
    expect(wrapper.prop('unitWidth')).toEqual(timelineRuleDataMock.unitWidth);
  });
});

describe('component structure', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <TimelineGrid
        units={timelineRuleDataMock.units}
        unitWidth={timelineRuleDataMock.unitWidth}
      />
    );
  });

  it('has right wrapper class name', () => {
    expect(wrapper.hasClass('TimelineGrid')).toBeTruthy();
  });

  it('has right children className', () => {
    expect(wrapper.childAt(0).hasClass('TimelineGrid__Line')).toBeTruthy();
  });

  it('has right children length', () => {
    expect(wrapper.children()).toHaveLength(timelineRuleDataMock.units.length);
  });
});
