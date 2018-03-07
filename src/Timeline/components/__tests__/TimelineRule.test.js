import React from 'react';
import { mount, shallow } from 'enzyme';
import TimelineRule from '../TimelineRule';

import { timelineRuleDataMock } from '../../__tests__/mocks';

describe('TimelineRule component test', () => {
  let wrapper;
  let emptyPropsWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <TimelineRule
        units={timelineRuleDataMock.units}
        unitWidth={timelineRuleDataMock.unitWidth}
      />
    );
    emptyPropsWrapper = shallow(<TimelineRule />);
  });

  describe('component rendering right', () => {
    it('render props right match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('render with empty props match snapshot', () => {
      expect(emptyPropsWrapper).toMatchSnapshot();
    });
  });

  describe('component has right props', () => {
    it('has right default props', () => {
      const mountedWrapper = mount(<TimelineRule />);
      expect(mountedWrapper.prop('units')).toEqual([]);
      expect(mountedWrapper.prop('unitWidth')).toEqual(0);
    });

    it('has right given props', () => {
      const mountedWrapper = mount(
        <TimelineRule
          units={timelineRuleDataMock.units}
          unitWidth={timelineRuleDataMock.unitWidth}
        />
      );
      expect(mountedWrapper.prop('units')).toEqual(timelineRuleDataMock.units);
      expect(mountedWrapper.prop('unitWidth')).toEqual(
        timelineRuleDataMock.unitWidth
      );
    });
  });

  describe('component structure', () => {
    it('has right wrapper class name', () => {
      expect(wrapper.hasClass('TimelineRule')).toBeTruthy();
    });

    it('has right children count', () => {
      expect(wrapper.children()).toHaveLength(
        timelineRuleDataMock.units.length
      );
    });
  });
});
