import React from 'react';
import { shallow } from 'enzyme';
import ExampleApp from './ExampleApp';

it('renders without crashing', () => {
  document.createElement('div');
  shallow(<ExampleApp />);
});
