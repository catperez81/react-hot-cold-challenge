import React from 'react';
import {shallow, mount, render} from 'enzyme';
import TopNav from './top-nav';

it('Renders without crashing', () => {
    shallow(<TopNav />);
});

it('Renders the restart button initially', () => {
	const wrapper = shallow(<TopNav />);
	expect(wrapper.hasClass('new')).toEqual(true);
});
