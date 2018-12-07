import React from 'react';
import { shallow, mount } from 'enzyme';
import  { UserSavedRecipes }  from '../components/containers/UserSavedRecipes';

describe('<UserSavedRecipes />', () => {
  it('renders without crashing', () => {
    shallow(<UserSavedRecipes />);
  });
})