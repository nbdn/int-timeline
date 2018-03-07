import React from 'react';
import { mount, shallow } from 'enzyme';
import Item from '../TimelineItem';

import { timelineDataMock, timelineRuleDataMock } from '../../__tests__/mocks';

describe('component rendering right', () => {
  let wrapper;
  let emptyPropsWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Item
        groupStart={timelineDataMock[0].start}
        iItem={0}
        start={timelineDataMock[0].items[0][0].start}
        end={timelineDataMock[0].items[0][0].end}
        title={timelineDataMock[0].items[0][0].title}
        unitWidth={timelineRuleDataMock.unitWidth}
      />
    );

    // Bypass random border color prop to match snapshot
    wrapper.childAt(0).prop('style').borderColor = '#612DC8';

    emptyPropsWrapper = shallow(<Item />);

    // Bypass random border color prop to match snapshot
    emptyPropsWrapper.childAt(0).prop('style').borderColor = '#612DC8';
  });

  it('renders props right match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('render with empty props match snapshot', () => {
    expect(emptyPropsWrapper).toMatchSnapshot();
  });
});

describe('component has right props', () => {
  it('has right default props', () => {
    const wrapper = mount(<Item />);
    expect(wrapper.prop('groupStart')).toEqual(0);
    expect(wrapper.prop('iItem')).toEqual(0);
    expect(wrapper.prop('start')).toEqual(0);
    expect(wrapper.prop('end')).toEqual(0);
    expect(wrapper.prop('title')).toEqual('');
    expect(wrapper.prop('unitWidth')).toEqual(0);
  });

  it('has right given props', () => {
    const wrapper = mount(
      <Item
        groupStart={timelineDataMock[0].start}
        iItem={0}
        start={timelineDataMock[0].items[0][0].start}
        end={timelineDataMock[0].items[0][0].end}
        title={timelineDataMock[0].items[0][0].title}
        unitWidth={timelineRuleDataMock.unitWidth}
      />
    );
    expect(wrapper.prop('groupStart')).toEqual(timelineDataMock[0].start);
    expect(wrapper.prop('iItem')).toEqual(0);
    expect(wrapper.prop('start')).toEqual(
      timelineDataMock[0].items[0][0].start
    );
    expect(wrapper.prop('end')).toEqual(timelineDataMock[0].items[0][0].end);
    expect(wrapper.prop('title')).toEqual(
      timelineDataMock[0].items[0][0].title
    );
    expect(wrapper.prop('unitWidth')).toEqual(timelineRuleDataMock.unitWidth);
  });
});

describe('component structure', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Item
        groupStart={timelineDataMock[0].start}
        iItem={0}
        start={timelineDataMock[0].items[0][0].start}
        end={timelineDataMock[0].items[0][0].end}
        title={timelineDataMock[0].items[0][0].title}
        unitWidth={timelineRuleDataMock.unitWidth}
      />
    );
  });

  it('has right wrapper class name', () => {
    expect(wrapper.hasClass('TimelineItem')).toBeTruthy();
  });

  it('has right children className', () => {
    expect(wrapper.childAt(0).hasClass('TimelineItem__content')).toBeTruthy();
  });

  it('has right children length', () => {
    expect(wrapper.children()).toHaveLength(1);
  });

  it('children display title', () => {
    const titleMock = <span>{timelineDataMock[0].items[0][0].title}</span>;
    expect(wrapper.childAt(0).contains(titleMock)).toBeTruthy();
  });

  it('children has right transform style property', () => {
    const translateXMock = `translateX(${timelineDataMock[0].start *
      timelineRuleDataMock.unitWidth -
      timelineDataMock[0].start * timelineRuleDataMock.unitWidth}px)`;
    expect(wrapper.prop('style').transform).toEqual(translateXMock);
  });
});
