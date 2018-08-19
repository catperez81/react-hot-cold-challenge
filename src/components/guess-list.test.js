import React from 'react';
import {shallow, mount, render} from 'enzyme';
import GuessList from './guess-list';

it('Renders without crashing', () => {
    shallow(<GuessList />);
});

// getting cannot read property 'map' of undefined //