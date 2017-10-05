import React from 'react';
import { shallow } from 'enzyme';
import About from './';

describe('<About> Component', () => {
  it('renders without crashing', () => {
    shallow(<About />);
  })
})
