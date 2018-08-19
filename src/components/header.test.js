import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Header from './header';

it('Renders without crashing', () => {
    shallow(<Header />);
});
