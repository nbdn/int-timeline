import React from 'react';
import { mount, shallow } from 'enzyme';
import TimelineRuleUnit from '../TimelineRuleUnit';

describe('TimelineRuleUnit component test', () => {
  let wrapper;
  let emptyPropsWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <TimelineRuleUnit iUnit={0} unit={'2001'} unitWidth={100} />
    );
    emptyPropsWrapper = shallow(<TimelineRuleUnit />);
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
      const mountedWrapper = mount(<TimelineRuleUnit />);
      expect(mountedWrapper.prop('iUnit')).toEqual(0);
      expect(mountedWrapper.prop('unit')).toEqual('2000');
      expect(mountedWrapper.prop('unitWidth')).toEqual(0);
    });

    it('has right given props', () => {
      const mountedWrapper = mount(
        <TimelineRuleUnit iUnit={0} unit={'2001'} unitWidth={100} />
      );
      expect(mountedWrapper.prop('iUnit')).toEqual(0);
      expect(mountedWrapper.prop('unit')).toEqual('2001');
      expect(mountedWrapper.prop('unitWidth')).toEqual(100);
    });
  });

  describe('component structure', () => {
    it('has right wrapper class name', () => {
      expect(wrapper.hasClass('TimelineRule__Item')).toBeTruthy();
    });
  });
});
