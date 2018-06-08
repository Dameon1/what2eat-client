import React from 'react';
import {shallow, mount} from 'enzyme';

import Content from './content';

describe('<Container />', () => {
       
     it('Renders without crashing', () => {
         shallow(<Content />);
     });
})