import React from 'react';
import {shallow, mount, render} from 'enzyme';
import TopNav from './top-nav';

it('Renders without crashing', () => {
    shallow(<TopNav />);
});