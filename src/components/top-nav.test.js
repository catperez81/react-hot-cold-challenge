import React from 'react';
import {shallow, mount, render} from 'enzyme';
import TopNav from './top-nav';

it('Renders without crashing', () => {
    shallow(<TopNav />);
});

it('Renders the restart button initially', () => {
	const wrapper = shallow(<TopNav />);
	// getting expect(received).toEqual(expected) error on fail //
	expect(wrapper.hasClass('new')).toEqual(true);
});
