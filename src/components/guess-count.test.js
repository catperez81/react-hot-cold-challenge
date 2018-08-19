import React from 'react';
import {shallow, mount, render} from 'enzyme';
import GuessCount from './guess-count';

it('Renders without crashing', () => {
    shallow(<GuessCount />);
});
