import React from 'react';
import {shallow, mount, render} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
	it('Renders without crashing', () => {
	    shallow(<GuessList guesses={[]}/>);
	});

	it('Renders the guesses', () => {
		const values = [2, 45, 29];
		const wrapper = shallow(<GuessList guesses={values} />);
		const items = wrapper.find('li');
		// below we find the list items //
		expect(items.length).toEqual(values.length);
		// go through each list item and try to see if they match. toString converts to a big string. //
		values.forEach((value, index) => {
			expect(items.at(index).text()).toEqual(value.toString());
		});
	});
});