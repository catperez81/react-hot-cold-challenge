import React from 'react';
import {shallow, mount, render} from 'enzyme';
import GuessForm from './guess-form';

it('Renders without crashing', () => {
    shallow(<GuessForm />);
});
