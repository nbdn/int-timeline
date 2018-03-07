import React from 'react';
import { mount, shallow } from 'enzyme';
import TimelineItemsLine from '../TimelineItemsLine';

import { timelineDataMock, timelineRuleDataMock } from '../../__tests__/mocks';

describe('TimelineItemsLine component test', () => {
  let wrapper;
  let emptyPropsWrapper;
  let groupMock;
  beforeEach(() => {
    groupMock = timelineDataMock[0];
    wrapper = shallow(
      <TimelineItemsLine
        start={groupMock.start}
        end={groupMock.end}
        unitWidth={timelineRuleDataMock.unitWidth}
        lineIndex={0}
        linesCount={groupMock.items.length}
      />
    );
    emptyPropsWrapper = shallow(<TimelineItemsLine />);
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
      const wrapper = mount(<TimelineItemsLine />);
      expect(wrapper.prop('start')).toEqual(0);
      expect(wrapper.prop('end')).toEqual(0);
      expect(wrapper.prop('unitWidth')).toEqual(0);
      expect(wrapper.prop('lineIndex')).toEqual(0);
      expect(wrapper.prop('linesCount')).toEqual(0);
    });

    it('has right given props', () => {
      const wrapper = mount(
        <TimelineItemsLine
          start={groupMock.start}
          end={groupMock.end}
          unitWidth={timelineRuleDataMock.unitWidth}
          lineIndex={0}
          linesCount={groupMock.items.length}
        />
      );
      expect(wrapper.prop('start')).toEqual(groupMock.start);
      expect(wrapper.prop('end')).toEqual(groupMock.end);
      expect(wrapper.prop('unitWidth')).toEqual(timelineRuleDataMock.unitWidth);
      expect(wrapper.prop('lineIndex')).toEqual(0);
      expect(wrapper.prop('linesCount')).toEqual(groupMock.items.length);
    });
  });

  describe('component structure', () => {
    it('has right wrapper class name', () => {
      expect(wrapper.hasClass('TimelineItemsGroup__Line')).toBeTruthy();
    });
  });
});
