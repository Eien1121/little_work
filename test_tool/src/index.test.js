import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import { shallow } from 'enzyme';
import {Eien} from './Napp';

configure({ adapter: new Adapter() });
describe('Check render DatePicker', () => {
	it('renders <DatePicker /> components', () => {
	const wrapper = shallow(<Eien />);
	expect(wrapper).toHaveLength(1);
	});
});