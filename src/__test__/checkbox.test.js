import React from 'react';
import { shallow, mount } from 'enzyme';
import Checkbox from '../components/display/Checkbox';

describe('<Checkbox />', () => {
  it('renders without crashing', () => {
    shallow(<Checkbox />);
  });

  
})