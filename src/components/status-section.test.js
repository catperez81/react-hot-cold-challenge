import React from 'react';
import {shallow, mount, render} from 'enzyme';
import StatusSection from './status-section';

it('Renders without crashing', () => {
    shallow(<StatusSection guesses={[]}/>);
});

// getting cannot read property 'length' of undefined //