import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Game from './game';

it('Renders without crashing', () => {
    shallow(<Game />);
});
