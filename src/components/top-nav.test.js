import React from 'react';
import {shallow, mount, render} from 'enzyme';
import TopNav from './top-nav';

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