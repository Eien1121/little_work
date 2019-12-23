import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import { shallow } from 'enzyme';
import Counter from './Counter';

configure({ adapter: new Adapter() });
describe('Check the result of 5 +', () => {
	it('renders <MyComponent /> components', () => {
	const wrapper = shallow(<Counter />);
	expect(wrapper).toHaveLength(2);
	});
});


// test('Check the result of 5 + ', () => {
// 	const wrp= shallow(<Counter/ >);
//     expect(wrp).toHaveLength(1)
// })