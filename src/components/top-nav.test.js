import React from 'react';
import {shallow, mount, render} from 'enzyme';
import TopNav from './top-nav';

describe ('<TopNav />', () => {
	it('Renders without crashing', () => {
		shallow(<TopNav />);
	});

	it('Renders the restart button initially', () => {
		const wrapper = shallow(<TopNav />);
		// getting expect(received).toEqual(expected) error on fail //
		expect(wrapper.find('#newGame').hasClass('new')).toEqual(true);
	});

	it('Renders the feedback link initially', () => {
		const wrapper = shallow(<TopNav />);
		// getting expect(received).toEqual(expected) error on fail //
		expect(wrapper.find('#howToPlay').hasClass('what')).toEqual(true);
	});

	it('Renders the status initially', () => {
		const wrapper = shallow(<TopNav />);
		// getting expect(received).toEqual(expected) error on fail //
		expect(wrapper.find('#getStatus').hasClass('status-link')).toEqual(true);
	});

	// jest.fn is a function that remembers when component was called - doesn't really test the function, but tests the code is doing what you want it to do. It will always remember. //
	it('New game should start when new game button is clicked', () => {
		const callback=jest.fn();
		// prop must match naming convention from js file. Callback is the spy passing through for the test //
		const wrapper = shallow(<TopNav onRestartGame={callback} />);
		const link = wrapper.find('.new');
		link.simulate('click', {
			preventDefault() {}
		});
		// toHaveBeenCalled is a method for spies //
		expect(callback).toHaveBeenCalled();
	});

});