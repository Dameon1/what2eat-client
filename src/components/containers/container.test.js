import React from 'react';
import {shallow, mount} from 'enzyme';

import Container from './container';

describe('<Container />', () => {
       
     it('Renders without crashing', () => {
         shallow(<Container />);
     });
    });
    //  describe('<Container />', () => {
    //   it('should render <Content /> components', () => {
    //     const wrapper = shallow(<Container />);
    //     expect(wrapper.find(Content)).to.have.length(1);
    //   });

    //  it('Renders completely without crashing', () => {
    //     mount(<Container />);
    //  })


    // it('Renders the add button initially', () => {
    //     const wrapper = shallow(<Container />);
    //     expect(wrapper.hasClass('add-button')).toEqual(true);
    // });

    // it('Should render the add form when editing', () => {
    //     const wrapper = shallow(<Container />);
    //     wrapper.instance().setEditing(true);
    //     wrapper.update();
    //     expect(wrapper.hasClass('add-form')).toEqual(true);
    // });

    // it('Should switch to editing when the add button is clicked', () => {
    //     const wrapper = shallow(<Container />);
    //     wrapper.simulate('click');
    //     expect(wrapper.state('editing')).toEqual(true);
    // });

    // it('Should fire the onAdd callback when the form is submitted', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<Container onAdd={callback} />);
    //     const value = 'Foobar';
    //     wrapper.instance().setEditing(true);
    //     wrapper.update();
    //     wrapper.find('input[type="text"]').instance().value = value;
    //     wrapper.simulate('submit');
    //     expect(callback).toHaveBeenCalledWith(value);
    // });

    // it('Should not fire onAdd if the input is empty', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<Container onAdd={callback} />);
    //     wrapper.instance().setEditing(true);
    //     wrapper.simulate('submit');
    //     expect(callback).not.toHaveBeenCalled();
    // });
//});










